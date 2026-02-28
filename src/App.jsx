import Blogpage from "./Components/Blogpage"
import Footer from "./Components/Footer"
import Homepage from "./Components/Homepage"
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/blog" element={<Blogpage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
