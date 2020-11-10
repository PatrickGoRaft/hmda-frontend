import React, { useState } from 'react';
import { PRODUCTS, PRODUCT_NAMES } from './constants/publication-changes'

const HEADERS = {
  update: ['Update', 'Date'],
  correction: ['Correction', 'Date'],
  release: ['Release', 'Date'],
  notice: ['Notice', 'Date'],
}

// Organize the change log data into highlights
const collectHighlights = data => {
  const LIMIT = 2

  const result = {
    product: {},
  }

  const addProduct = (product, value) => {
    if (result.product[product] === undefined) result.product[product] = []
    if (result.product[product].length < LIMIT) 
      result.product[product].push(value)
  }

  Object.keys(data).forEach(date => {
    const todaysItems = data[date]
    todaysItems.forEach(item => {
      // Collect changes per Product
      addProduct(item.product, item)

      // Collect changes by Change Type
      if (!result[item.type]) result[item.type] = []
      if (result[item.type].length < LIMIT) {
        result[item.type].push(item)
      }
    })
    
  })

  return result
}

const PublicationHighlights = ({ data, filter }) => {

  const highlights = collectHighlights(data)
  const changeTypes = Object.keys(highlights).filter(key => key !== 'product')

  return (
    <div id='publicationHighlights'>
      <h2>Highlights</h2>
      <div className='split'>
        <div className='product-highlights'>
          <h3 className='header'>
            <span>by Product</span>
          </h3>
          {PRODUCTS.map((productId, idx) => (
            <ProductHighlight
              key={`${productId}-${idx}`}
              items={highlights.product[productId]}
              name={PRODUCT_NAMES[productId]}
              filter={filter}
            />
          ))}
        </div>
        <div className='change-type-highlights'>
          <h3 className='header'>by Change Type</h3>
          {changeTypes.map((cType) => (
            <ChangeTable changes={highlights[cType]} headers={HEADERS[cType]} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ChangeTable = ({ changes, headers }) => {
  return (
    <table className='change-table'>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={`${header}-${idx}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!changes.length && <tr><td colSpan='2'>No entries</td></tr>}
        {changes.map(({ changeDateOrdinal, headline }, idx) => (
          <tr key={`change-${idx}`}>
            <td className='description'>{headline}</td>
            <td className='date'>{changeDateOrdinal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const ProductHighlight = ({ items, name, filter }) => {
  if (!items || !items.length) return null

  return (
    <div className='product'>
      <span className='name'>
        <span className='text'> {name}</span>
      </span>
      <div>
        {items.map((item, idx) => (
          <Accordion key={idx} 
            header={item.headline} 
            body={addFilterLinks(item, filter)} 
            />
        ))}
      </div>
    </div>
  )
}


function addFilterLinks(item, filter) {
  let infused = <>{item.description}</>
  item.tags.forEach(tag => {
    let parts = item.description.replace(tag, "$_INJECT").split(" ")
    parts = parts.map(part => {
      if (part.indexOf('$_INJECT') > -1) {
        const remainder = part.replace('$_INJECT', '') // Preserve trailing punctuation
        return (
          <>
            <Linked text={tag} filter={filter} />
            {remainder}{' '}
          </>
        )
      }
      return part + " "
    })
    infused = <>{parts}</>
  })
  return infused
}


const Linked = ({ text, filter }) => {
  const handleClick = () => {
    filter.add('keywords', text)
    document
      .getElementById('pub-whats-new')
      .scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => document.getElementById('keyword-input').focus(), 500)
  }

  return (
    <span className='link' onClick={handleClick}>
      {text}
    </span>
  )
}


const Accordion = ({ header, body }) => {
  const [open, setOpen] = useState(false)
  const openClass = open ? 'open' : ''

  return (
    <div className={'accordion ' + openClass}>
      <span className='title' onClick={() => setOpen(!open)}>
        <span className='icon'>{open ? '▾' : '▸'}</span>
        <span className='text'> {header}</span>
      </span>
      <span className='body'>{body}</span>
    </div>
  )
}


export default PublicationHighlights