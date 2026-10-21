import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import "./PracticeLayout.css"

function PracticeWrapper() {
  return (
    <div className='layout'>

        <TopBar />

        <main className='content'>          
          <Outlet />
        </main>

    </div>
  )
}

export default PracticeWrapper