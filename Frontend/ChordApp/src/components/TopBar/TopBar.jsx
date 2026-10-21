import React from 'react'
import { Link } from 'react-router-dom'
import EarWorksIcon from '../../assets/ear_works_icon.png'
import { IoSettingsOutline } from "react-icons/io5";
import "./TopBar.css"


function NavBar() {
  return (
    <div className='nav-body'>
      <div className='nav-header'>
        <Link className='logo-wrapper' to='/'>
          <img className='logo' src={EarWorksIcon} alt='app logo'/>
          <p className='title'>EarWorks</p>
        </Link>
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
      <div className='settings'>
        <IoSettingsOutline className='gear-icon'/>
      </div>
    </div>
  )
}

export default NavBar