import { FormEvent, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { MdCheck, MdClose, MdDelete, MdEdit } from 'react-icons/md'
import { toast } from 'react-toastify'
import { usePasses } from '../../../context/PassProvider'
import { useSettings } from '../../../context/SettingsProvider'
import * as validate from '../../../helpers/validateInput'
import { defaultErrorState, ErrorState } from '../../../interfaces/error'
import { Pass } from '../../../interfaces/passes'
import * as passService from '../../../services/passService'
import './PassListRow.scss'


export default function PassListRow({ pass }: { pass: Pass }) {

  const { settings } = useSettings()
  const { passes, setPasses } = usePasses()

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

  const handleCancel = () => {
    setNewPass(passes[passes.findIndex(pass => pass.id === newPass.id)])
    setEdit(false)
  }

  const handleDelete = () => {
    confirmAlert({
      message: `are you sure you want to delete ${pass.firstName} ${pass.lastName}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            passService.remove(pass.id)
            setPasses(passService.getAll())
            toast(`deleted ${pass.firstName} ${pass.lastName}`)
          }
        },
        {
          label: 'cancel',
        }
      ]
    })
  }

  return (
    <>
      {!edit ?
        <tr>
          <td>{pass.firstName}</td>
          <td>{pass.lastName}</td>
          <td>{pass.type}</td>
          <td>{pass.phone}</td>
          {(settings.delete || settings.edit) &&
            <td className='row__actions'>
              {settings.edit &&
                <button className='row__action row__action--confirm' type='button' onClick={() => setEdit(true)}>
                  <MdEdit />
                </button>
              }
              {settings.delete &&
                <button className='row__action row__action--cancel' type='button' onClick={handleDelete} >
                  <MdDelete />
                </button>
              }
            </td>
          }
        </tr>
        :
        <tr>
          <td>
            <input className='row__input' type="text" name="firstName" value={newPass.firstName} onChange={handleChange} />
            {!error.firstName.valid && <p>{error.firstName.message}</p>}
          </td>
          <td>
            <input className='row__input' type="text" name="lastName" value={newPass.lastName} onChange={handleChange} />
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
            <input className='row__input' type="text" name="phone" value={newPass.phone} onChange={handleChange} />
            {!error.phone.valid && <p>{error.phone.message}</p>}
          </td>
          <td className='row__actions'>
            <button className='row__action row__action--confirm' type='button' onClick={handleConfirm}  >
              <MdCheck />
            </button>
            <button className='row__action row__action--cancel' type='button' onClick={handleCancel} >
              <MdClose />
            </button>
          </td>
        </tr>
      }
    </>
  )
}