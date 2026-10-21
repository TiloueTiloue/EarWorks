import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import "./ExerciseLayout.css"
import SettingsContext from "./SettingsContext";

function ExerciseLayout() {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <SettingsContext.Provider value={{ isSettingsOpen, setIsSettingsOpen }}>
      <div className='layout'>

        <TopBar />

        <main className='content'>          
          <Outlet />
        </main>

      </div>
    </SettingsContext.Provider>
  )
}

export default ExerciseLayout