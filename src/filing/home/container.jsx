import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './index.jsx'
import InstitutionsContainer from '../institutions/container.jsx'

export class HomeContainer extends Component {
  
  render() {
    if (this.props.user === null || this.props.maintenanceMode) return (
      <Home
        pathname={this.props.location.pathname}
        filingPeriod={this.props.match.params.filingPeriod}
        filingYears={this.props.filingPeriods}
        maintenanceMode={this.props.maintenanceMode}
        announcement={this.props.announcement}
      />
    )
    return <InstitutionsContainer />
  }
}

export function mapStateToProps(state, ownProps) {
  return {
    user: state.app.user.oidc,
    filingPeriods: ownProps.config.filingPeriods,
    maintenanceMode: ownProps.config.maintenanceMode,
    announcement: ownProps.config.announcement
  }
}

export default connect(mapStateToProps)(HomeContainer)
