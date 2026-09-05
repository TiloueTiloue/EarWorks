import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import "./PracticeLayout.css"

function PracticeWrapper() {
  return (
    <div className='layout'>

        <NavBar />

        <main className='content'>
          <Outlet />
        </main>

    </div>
  )
}

export default PracticeWrapper