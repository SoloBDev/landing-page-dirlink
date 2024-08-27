import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Registration from '../pages/Registeration'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Registration  />} />
      </Routes>
  )
}

export default MainRoutes