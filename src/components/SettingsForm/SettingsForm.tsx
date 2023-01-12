import { useState } from 'react'
import * as passService from '../../services/passService'
import './SettingsForm.scss'

interface Settings {
  edit: boolean,
}

const defaultSettings: Settings = {
  edit: false,

}

export default function SettingsForm() {

  const [settings, setSettings] = useState<Settings>(defaultSettings)

  const toggleSetting = (setting: keyof Settings): void => {
    const newSettings = { ...settings }
    newSettings[setting] = !newSettings[setting]
    setSettings(newSettings)
  }

  return (
    <form className='settings-form'>
      <label className='settings-form__setting'>
        <p>Editor Mode</p>
        <input type="checkbox" onChange={() => toggleSetting('edit')} checked={settings.edit} />
      </label>

      <button className='settings-form__clear' type='button' onClick={() => passService.clear()} >Clear all Passes</button>
    </form>
  )
}