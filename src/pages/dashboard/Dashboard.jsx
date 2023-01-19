import React from 'react'

import { Link } from 'react-router-dom'


import DashboardContent from '../../components/dashboard/DashboardContent'
import DashboardMenu from '../../components/dashboard/DashboardMenu'

const Dashboard = () => {
    return <div className="grid grid-cols-6 gap-2 h-screen ">
        <div className="">
            <DashboardMenu />
        </div>
        <div className="col-span-5">
            <DashboardContent />
        </div>
    </div>
}

export default Dashboard;