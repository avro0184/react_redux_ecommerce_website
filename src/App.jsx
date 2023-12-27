import { useState } from 'react'
import Products from './component/Products'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Allcard from './component/Allcard'

function App() {

  return (
    <>
     <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product' element={<Allcard/>} />
        </Routes>
    </>
  )
}

export default App
