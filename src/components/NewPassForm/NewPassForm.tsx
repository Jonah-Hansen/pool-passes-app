import { FormEvent, useEffect, useState } from 'react'
import { usePasses } from '../../context/PassProvider'
import * as validate from '../../helpers/validateInput'
import { Error } from '../../interfaces/error'
import { Pass } from '../../interfaces/passes'
import * as passService from '../../services/passService'
import FormInput from '../FormInput/FormInput'
import './NewPassForm.scss'


interface ErrorState {
  firstName: Error,
  lastName: Error,
  phone: Error,
}

const defaultErrorState = {
  firstName: { valid: true, message: '' },
  lastName: { valid: true, message: '' },
  phone: { valid: true, message: '' },
}

export default function NewPassForm({ close }: { close: () => void }) {

  const [error, setError] = useState<ErrorState>(defaultErrorState)
  const { setPasses } = usePasses()

  //sets the first input to checked by default on first render
  useEffect(() => {
    document.querySelector('input[type="radio"]')?.setAttribute('checked', '')
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPass: Pass = {
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      type: e.currentTarget.type.value,
      phone: e.currentTarget.phone.value,
    }
    if (
      !validate.name(newPass.firstName).valid
      || !validate.name(newPass.lastName).valid
      || !validate.phone(newPass.phone).valid
    ) {
      setError({
        firstName: validate.name(newPass.firstName),
        lastName: validate.name(newPass.lastName),
        phone: validate.phone(newPass.phone),
      })
      return
    }
    newPass.phone = validate.phone(newPass.phone).message
    passService.add(newPass)
    setPasses(passService.getAll())
    close()
  }

  return (
    <form className='new-pass-form' onSubmit={handleSubmit} >
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
        <FormInput type='text' label='First Name:' name='firstName' error={error.firstName} />
        <FormInput type='text' label='Last Name:' name='lastName' error={error.lastName} />
        <FormInput type='text' label='Phone:' name='phone' value='(306) ' error={error.phone} />
      </fieldset>
      <div className='new-pass-form__buttons'>
        <button type='reset' className='new-pass-form__cancel' onClick={close}>Cancel</button>
        <button type='submit' className='new-pass-form__submit'>Submit</button>
      </div>
    </form>
  )
}