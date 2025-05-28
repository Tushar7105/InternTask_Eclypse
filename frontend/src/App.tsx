import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CheckoutPage from './components/CheckoutPage'
import HomePage from './components/HomePage'


function App() {

  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
