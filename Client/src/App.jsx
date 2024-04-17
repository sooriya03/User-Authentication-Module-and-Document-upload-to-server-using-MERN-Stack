import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Upload from './Upload'
import Review from './Review'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Toaster position='bottom-right' toastOptions={{duration: 3000}}/>
      <Routes>
        <Route path='/register' element ={<Signup />}></Route>
        <Route path='/' element ={<Login />}></Route>
        <Route path='/home' element ={<Home />}></Route>
        <Route path='/upload' element ={<Upload />}></Route>
        <Route path='/review' element ={<Review />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
