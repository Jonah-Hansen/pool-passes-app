import { useEffect } from 'react'
import FormInput from '../FormInput/FormInput'
import './NewPassForm.scss'

export default function NewPassForm() {

  useEffect(() => {
    //sets the first input to checked by default on first render
    document.querySelector('input')?.setAttribute('checked', '')
  }, [])

  return (
    <form className='new-pass-form' >
      <fieldset className='new-pass-form__field'>
        <legend >Pass Type</legend>
        <FormInput type='radio' label='Family' name='type' value='family' />
        <FormInput type='radio' label='Adult' name='type' value='adult' />
        <FormInput type='radio' label='Student' name='type' value='student' />
        <FormInput type='radio' label='Child' name='type' value='child' />
        <FormInput type='radio' label='Preschool' name='type' value='preschool' />
      </fieldset>
      <fieldset className='new-pass-form__field'>
        <legend >Primary Pass Holder Contact</legend>
        <FormInput type='text' label='First Name:' name='firstName' />
        <FormInput type='text' label='Last Name:' name='lastName' />
        <FormInput type='text' label='Phone:' name='phone' value='(306) ' />
      </fieldset>
      <div className='new-pass-form__buttons'>
        <button type='reset' className='new-pass-form__cancel'>Cancel</button>
        <button type='submit' className='new-pass-form__submit'>Submit</button>
      </div>
    </form>
  )
}