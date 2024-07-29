import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Listing from "./pages/Listing"
import Addproperty from "./pages/Addproperty"
import Favourites from "./pages/Favourites"
import Bookings from "./pages/Bookings"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/addproperty" element={<Addproperty/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}