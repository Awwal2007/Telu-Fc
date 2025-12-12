// import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Toaster} from 'sonner'
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
