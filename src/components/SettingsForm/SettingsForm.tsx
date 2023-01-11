import FormInput from '../FormInput/FormInput'
import './SettingsForm.scss'

export default function SettingsForm() {
  return (
    <form>
      <FormInput type='checkbox' label='Editor Mode' name='editor' />
    </form>
  )
}