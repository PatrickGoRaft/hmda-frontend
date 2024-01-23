import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Alert from '../Alert'
import Loading from '../../common/LoadingIcon.jsx'

import './Results.css'

const ResultsActions = ({
  institution,
  index,
  error,
  handleDeleteClick,
  tables,
}) => {
  const [deleting, setDeleting] = useState(false)
  const buttonsRef = useRef(new Map())

  const toggleAreYouSure = (index) => {
    document.getElementById(`initialActions${index}`).classList.toggle('hidden')
    document.getElementById(`areYouSure${index}`).classList.toggle('hidden')
  }

  const handleViewMoreClick = (index) => {
    const table = tables.get(index)
    const button = buttonsRef.current.get(index)

    table.classList.toggle('hidden')
    if (table.classList.contains('hidden')) {
      button.innerHTML = 'Show other fields'
    } else {
      button.innerHTML = 'Hide other fields'
    }
  }

  return (
    <td className='action'>
      {deleting ? (
        <Loading className='LoadingInline' />
      ) : (
        <React.Fragment>
          <div className='initialActions' id={`initialActions${index}`}>
            <Link
              to={{
                pathname: `/update/institution/${institution.lei}/${institution.activityYear}`,
                state: { institution: institution },
              }}
            >
              Update
            </Link>
            <button className='delete' onClick={() => toggleAreYouSure(index)}>
              Delete
            </button>
            <button
              onClick={() => handleViewMoreClick(index)}
              ref={(element) => buttonsRef.current.set(index, element)}
              className='showOtherFields'
            >
              Show other fields
            </button>
          </div>
          <div className='areYouSure hidden' id={`areYouSure${index}`}>
            <span>Are you sure?</span>{' '}
            <div className='buttons'>
              <button
                className='yes'
                onClick={() => {
                  setDeleting(true)
                  handleDeleteClick(institution, index)
                }}
              >
                Yes
              </button>
              <button
                className='delete'
                onClick={() => toggleAreYouSure(index)}
              >
                No
              </button>
            </div>
          </div>
          {error ? (
            <Alert
              type='error'
              heading='Access Denied'
              text="Sorry, it doesn't look like you have the correct permissions to
                    perform this action."
            />
          ) : null}
        </React.Fragment>
      )}
    </td>
  )
}

ResultsActions.propTypes = {
  institution: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  error: PropTypes.string,
  handleDeleteClick: PropTypes.func.isRequired,
  tables: PropTypes.object.isRequired,
}

export default ResultsActions
