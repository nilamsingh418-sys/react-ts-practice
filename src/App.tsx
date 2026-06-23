import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Pages/home'
import Form from './Pages/form'
import NotFound from './Pages/NotFound'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
