import { Outlet } from "react-router-dom";
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import SideNav from "../components/NavBar/SideNav";

const Layout1 = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

const Layout2 = () => {
  return (
    <>
      <NavBar />
      <div className="flex relative">
        <SideNav />
        <div className="w-full pt-20">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

const Layout3 = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export { Layout1, Layout2, Layout3 }