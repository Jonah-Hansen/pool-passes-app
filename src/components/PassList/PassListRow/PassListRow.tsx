import { FormEvent, useState } from 'react'
import { MdCheck, MdClose, MdEdit } from 'react-icons/md'
import { useSettings } from '../../../context/SettingsProvider'
import { Pass } from '../../../interfaces/passes'

export default function PassListRow({ pass }: { pass: Pass }) {

  const { settings } = useSettings()

  const [edit, setEdit] = useState(false)

  const [newPass, setNewPass] = useState(pass)

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
    const editedPass = { ...newPass }
    editedPass[e.currentTarget.name as keyof Pass] = e.currentTarget.value
    setNewPass(editedPass)
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
          </td>
          <td>
            <input type="text" name="lastName" defaultValue={pass.lastName} />
          </td>
          <td>
            <select name="type" defaultValue={pass.type} >
              <option value="family">Family</option>
              <option value="adult">Adult</option>
              <option value="student">Student</option>
              <option value="child">child</option>
              <option value="preschool">preschool</option>
            </select>
          </td>
          <td>
            <input type="text" name="phone" defaultValue={pass.phone} />
          </td>
          <td>
            <button type='button' >
              <MdCheck />
            </button>
          </td>
          <td>
            <button type='button' >
              <MdClose onClick={() => setEdit(false)} />
            </button>
          </td>
        </tr>
      }
    </>
  )
}