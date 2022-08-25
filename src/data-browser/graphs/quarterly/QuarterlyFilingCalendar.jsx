import QFilingCal from '../../../documentation/markdown/images/quarterly_filing_2021.png'
import { ExpandableSection } from '../../../common/ExpandableSection'

export const QuarterlyFilingCalendar = ({ expanded = false }) => {
  const lableFormatFn = visible =>
    '▸ ' + (visible ? 'Hide' : 'View') + ' Quarterly Filing Calendar'
  
  return (
    <ExpandableSection labelFormatter={lableFormatFn}>
      <img src={QFilingCal} alt='Quarterly Filing Calendar 2021' />
    </ExpandableSection>
  )

}
