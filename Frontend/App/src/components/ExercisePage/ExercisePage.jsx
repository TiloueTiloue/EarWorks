import { useContext } from 'react'
import SettingPopup from '../SettingPopup/SettingPopup'
import SettingsContext from '../ExerciseLayout/SettingsContext';

function ExercisePage({ settings }) {

  const { isSettingsOpen, setIsSettingsOpen } = useContext(SettingsContext);

  return (
    <div>


    {isSettingsOpen && (
      <SettingPopup settings={ settings } setIsSettingsOpen={ setIsSettingsOpen }/>
    )}
    </div>
  )
}

export default ExercisePage