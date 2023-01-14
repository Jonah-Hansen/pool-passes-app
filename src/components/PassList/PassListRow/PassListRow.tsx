import { FormEvent, useState } from 'react'
import { MdCheck, MdClose, MdEdit } from 'react-icons/md'
import { usePasses } from '../../../context/PassProvider'
import { useSettings } from '../../../context/SettingsProvider'
import * as validate from '../../../helpers/validateInput'
import { defaultErrorState, ErrorState } from '../../../interfaces/error'
import { Pass } from '../../../interfaces/passes'
import * as passService from '../../../services/passService'


export default function PassListRow({ pass }: { pass: Pass }) {

  const { settings } = useSettings()
  const { setPasses } = usePasses()

  const [edit, setEdit] = useState(false)
  const [error, setError] = useState<ErrorState>(defaultErrorState)

  const [newPass, setNewPass] = useState(pass)

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const editedPass = { ...newPass }
    editedPass[e.currentTarget.name as keyof Pass] = e.currentTarget.value
    setNewPass(editedPass)
  }

  const handleConfirm = () => {
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
    passService.update(newPass)
    setPasses(passService.getAll())
    setEdit(false)
  }


  return (
    <>
      {!edit ?
        <tr>
          <td>{pass.firstName}</td>
          <td>{pass.lastName}</td>
          <td>{pass.type}</td>
          <td>{pass.phone}</td>
          {settings.edit &&
            <td>
              <button type='button' onClick={() => setEdit(true)}>
                <MdEdit />
              </button>
            </td>
          }
          {/* {settings.delete &&
            <td><button type='button'><MdDelete /></button></td>
          } */}
        </tr>
        :
        <tr>
          <td>
            <input type="text" name="firstName" value={newPass.firstName} onChange={handleChange} />
            {!error.firstName.valid && <p>{error.firstName.message}</p>}
          </td>
          <td>
            <input type="text" name="lastName" value={newPass.lastName} onChange={handleChange} />
            {!error.lastName.valid && <p>{error.lastName.message}</p>}
          </td>
          <td>
            <select name="type" value={newPass.type} onChange={handleChange} >
              <option value="family">Family</option>
              <option value="adult">Adult</option>
              <option value="student">Student</option>
              <option value="child">child</option>
              <option value="preschool">preschool</option>
            </select>
          </td>
          <td>
            <input type="text" name="phone" value={newPass.phone} onChange={handleChange} />
            {!error.phone.valid && <p>{error.phone.message}</p>}
          </td>
          <td>
            <button type='button' onClick={() => handleConfirm()}  >
              <MdCheck />
            </button>
          </td>
          <td>
            <button type='button' onClick={() => setEdit(false)} >
              <MdClose />
            </button>
          </td>
        </tr>
      }
    </>
  )
}