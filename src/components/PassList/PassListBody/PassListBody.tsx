import { useSettings } from '../../../context/SettingsProvider'
import { Pass } from '../../../interfaces/passes'
import './PassListBody.scss'

export default function PassListBody({ shownPasses }: { shownPasses: Pass[] }) {

  const { settings } = useSettings()

  return (
    <tbody>
      {shownPasses.map(pass =>
        !settings.edit ?
          <tr key={pass.id}>
            <td>{pass.firstName}</td>
            <td>{pass.lastName}</td>
            <td>{pass.type}</td>
            <td>{pass.phone}</td>
          </tr>
          :
          <tr key={pass.id} >
            <td>
              <input type="text" name="firstName" defaultValue={pass.firstName} />
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
          </tr>
      )}
    </tbody>
  )
}