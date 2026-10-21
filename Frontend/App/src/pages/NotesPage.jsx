import React from 'react'
import ExercisePage from "../components/ExercisePage/ExercisePage"
import "./pages.css"



const NotesPage = () => {

  const settings = {
    testval: "SUCCESS"
  }

  return (
    <div className='page'>
      <ExercisePage settings={ settings } />
    </div>
  )
}

export default NotesPage;