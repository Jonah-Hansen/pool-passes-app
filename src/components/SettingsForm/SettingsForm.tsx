import { useSettings } from '../../context/SettingsProvider'
import * as passService from '../../services/passService'
import './SettingsForm.scss'

export default function SettingsForm() {

  const { settings, toggleSetting } = useSettings()

  return (
    <form className='settings-form'>
      <label className='settings-form__setting'>
        <p>Allow Editing</p>
        <input type="checkbox" onChange={() => toggleSetting('edit')} checked={settings.edit} />
      </label>

      <button className='settings-form__clear' type='button' onClick={() => passService.clear()} >Clear all Passes</button>
    </form>
  )
}