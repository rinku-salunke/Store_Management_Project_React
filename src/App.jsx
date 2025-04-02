import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Templates/Header'
import ViewProducts from './Products/ViewProducts'
import AddProduct from './Products/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Header/>

<div className='app'>
<Routes>
  <Route path='add' element={<AddProduct/>}></Route>
  <Route path='view' element={<ViewProducts/>}></Route>
</Routes>
</div>

</BrowserRouter>
    </>
  )
}

export default App;
