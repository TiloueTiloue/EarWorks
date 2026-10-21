import React, { useContext } from 'react'
import './SettingPopup.css'
import { IoClose } from "react-icons/io5";

function SettingPopup({ settings, setIsSettingsOpen}) {

  return (
    <div className='settings-body'>
        <div className='settings-block'>
          
          <button className='exit' onClick={() => setIsSettingsOpen(false)}>
            <IoClose className='close-icon'/>
          </button>
          <h1>{ settings.testval }</h1>
          
        </div>
    </div>
  )
}

export default SettingPopup