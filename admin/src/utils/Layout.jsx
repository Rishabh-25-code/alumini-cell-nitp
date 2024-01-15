import { Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

const Layout1 = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

const Layout3 = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export { Layout1, Layout3 }