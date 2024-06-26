import React from 'react'
import Heading from '../../../common/Heading'
import { S3DatasetLink } from '../../../common/S3Integrations'
import { LabelWithTooltip } from '../LabelWithTooltip'

/**
 * Creates a link within a list item
 */
const makeListLink = ({ url, label }, _idx) => (
  <li key={url}>
    <a href={url}>{label}</a>
  </li>
)

/**
 * List of Documentation links for a given year
 * @param {String} year
 * @returns Array
 */
export function linkToSpecs(year = '2018') {
  const entries = [
    {
      url: '/documentation/publications/loan-level-datasets/public-lar-schema',
      label: 'Public LAR Schema',
    },
    {
      url: '/documentation/publications/loan-level-datasets/public-ts-schema',
      label: 'Public Transmittal Sheet Schema',
    },
    {
      url: '/documentation/publications/loan-level-datasets/public-panel-schema',
      label: 'Public Panel Schema',
    },
    {
      url: '/documentation/publications/loan-level-datasets/lar-data-fields',
      label: 'Public HMDA Data Fields with Values and Definitions',
    },
    {
      url: '/documentation/publications/loan-level-datasets/panel-data-fields',
      label: 'Public Panel Values and Definitions',
    },
  ]

  return entries.map(makeListLink)
}

/**
 * Renders a formatted list of Datasets
 */
export function renderDatasets(
  { datasets, exception },
  selectedYear,
  datasetType,
) {
  if (!datasets) return <p>{exception}</p>

  // One Year 2022 and Three Year 2020 Reporter Panel files are not going to be ready for 2023 Data Publication
  // Adding extra logic to target these years and the files to display a message to users that the files are missing
  // Remove the logic once the data team has generated these files and is made available
  const displayMessage = `Files for ${selectedYear} are not available at this time`

  const shouldDisplayMessage =
    (selectedYear === '2022' && datasetType === 'oneYear') ||
    (selectedYear === '2020' && datasetType === 'threeYear')

  return (
    <ul id='datasetList'>
      {datasets.map((dataset, i) => {
        const isReporterPanel = dataset.dataKey === 'panel'

        return (
          <li key={i}>
            <LabelWithTooltip {...dataset} />

            <ul className='dataset-items'>
              {isReporterPanel && shouldDisplayMessage ? (
                <li>
                  <p>{displayMessage}</p>
                </li>
              ) : (
                <>
                  <S3DatasetLink
                    url={dataset.csv}
                    label='CSV'
                    showLastUpdated={true}
                  />
                  <S3DatasetLink
                    url={dataset.txt}
                    label='Pipe Delimited'
                    showLastUpdated={true}
                  />
                </>
              )}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
/**
 * Render documentation links
 */
export const renderDocumentation = (data, year) => {
  if (!data.datasets) return null

  const specContent =
    year === '2017' ? (
      <S3DatasetLink url={data.dataformat} label='LAR, TS and Reporter Panel' />
    ) : (
      linkToSpecs(year)
    )

  return (
    <>
      <Heading type={4} headingText={year + ' Documentation'} />
      <ul>
        {[
          {
            url: '/documentation/faq/static-dataset-faq',
            label: 'Static Dataset FAQ',
          },
        ].map(makeListLink)}
      </ul>
      <Heading type={4} headingText={year + ' File Specifications'} />
      <ul>{specContent}</ul>
    </>
  )
}
