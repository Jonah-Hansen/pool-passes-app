import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'
import { useSettings } from '../../context/SettingsProvider'
import * as passService from '../../services/passService'

import './SettingsForm.scss'

export default function SettingsForm() {

  const { settings, toggleSetting } = useSettings()

  const handleClear = () => {
    confirmAlert({
      message: 'are you sure you want to delete all passes? This action cannot be undone.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            passService.clear()
            toast('all passes have been removed')
          }
        },
        {
          label: 'cancel',
        }
      ]
    })
  }

  return (
    <form className='settings-form'>
      <label className='settings-form__setting'>
        <p>Allow Editing</p>
        <input type="checkbox" onChange={() => toggleSetting('edit')} checked={settings.edit} />
      </label>
      <label className='settings-form__setting'>
        <p>Allow Deleting</p>
        <input type="checkbox" onChange={() => toggleSetting('delete')} checked={settings.delete} />
      </label>

      <button className='settings-form__clear' type='button' onClick={handleClear} >Clear all Passes</button>
    </form>
  )
}