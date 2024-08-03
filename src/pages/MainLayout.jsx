import LeftSidebar from '../components/dashbaord/LeftSidebar'
import TopBar from '../components/dashbaord/TopBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='dashboard d-flex flex-wrap'>
      <div className="dashboard-left">
        <LeftSidebar />
      </div>
      <div className="dashboard-right">
        <TopBar />
        <div className="dashboard-main">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
