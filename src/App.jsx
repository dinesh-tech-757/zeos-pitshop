import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Waitlist from './Components/Waitlist/Waitlist'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      <Waitlist/>
    </div>
  )
}

export default App