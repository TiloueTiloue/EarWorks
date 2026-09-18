import React from 'react'
import { Link } from 'react-router-dom'
import EarWorksIcon from '../../assets/ear_works_icon.png'
import "./NavBar.css"


function NavBar() {
  return (
    <div className='nav-body'>
      <div className='nav-header'>
        <Link className='logo-wrapper' to='/'>
          <img className='logo' src={EarWorksIcon} alt=''app logo />
        </Link>
        <p className='title'>EarWorks</p>
      </div>
      <div className='nav-content'>
        <Link className='content-link' to='/notes'>
          <p>Notes</p>
        </Link>
        <Link className='content-link' to='/chords'>
          <p>Chords</p>
        </Link>
        <Link className='content-link' to='/scales'>
          <p>Scales</p>
        </Link>
        <Link className='content-link' to='/keys'>
          <p>Keys</p>
        </Link>
      </div>
      <div className='nav-footer'>

      </div>
    </div>
  )
}

export default NavBar