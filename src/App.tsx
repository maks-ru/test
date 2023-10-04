import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { DataCardPage } from './Pages/DataCardPage'
import { DataTablePage } from './Pages/DataTablePage'
import { NotFound } from './Pages/NotFound'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/card' element={<DataCardPage />} />
        <Route path='/' element={<DataTablePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </>
  )
}

export default App
