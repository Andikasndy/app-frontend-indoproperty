import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Listing from "./pages/Listing"
import Addproperty from "./pages/Addproperty"
import Favourites from "./pages/Favourites"
import Bookings from "./pages/Bookings"
import { Suspense } from "react"
import Layout from "./components/Layout"
import {QueryClient, QueryClientProvider} from "react-query"
import { ToastContainer } from "react-toastify"
import { ReactQueryDevtools} from "react-query/devtools"
import Property from "./pages/Property"

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading data...</div>}>
          <Routes>
            <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/listing" >
              <Route index element={<Listing/>}/>
              <Route path=":propertyid" element={<Property/>}/>
            </Route>
            <Route path="/addproperty" element={<Addproperty/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/bookings" element={<Bookings/>}/>
            </Route>
          </Routes>
      </Suspense>
    </BrowserRouter>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen ={false}/>
    </QueryClientProvider>
  )
}