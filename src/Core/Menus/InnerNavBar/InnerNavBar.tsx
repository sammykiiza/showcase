import React, { Fragment } from 'react'
import ContractManagement from './ContractManagement'
import Finance from './Finance'
import Planning from './Planning'
import Reporting from './Reporting'
import RoadInventory from './RoadInventory'
import RoadNetwork from './RoadNetwork'
import UserManagement from './UserManagement'

/**
 * @description The horizontal nav bar that is displayed on the main nav bar of all the sections of the system apart from the map section.
 * @returns 
 */
function InnerNavBar() {
    return (
        <>
            {
                (window.location.href.indexOf("/road-network/") > -1) &&
                (<RoadNetwork />)
            }
            {
                (window.location.href.indexOf("/road-inventory/") > -1) &&
                (<RoadInventory />)
            }
            {
                (window.location.href.indexOf("/planning/") > -1) &&
                (<Planning />)
            }
            {
                (window.location.href.indexOf("/contract-management/") > -1) &&
                (<ContractManagement />)
            }
            {
                (window.location.href.indexOf("/finance/") > -1) &&
                (<Finance />)
            }
            {
                (window.location.href.indexOf("/reporting/") > -1) &&
                (<Reporting />)
            }
            {
                (window.location.href.indexOf("/user-management/") > -1) &&
                (<UserManagement />)
            }
        </>
    )
}

export default InnerNavBar