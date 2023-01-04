import { usePasses } from '../../context/PassProvider'
// import { populateTestData } from '../../helpers/testData'

import './PassList.scss'

export default function PassList() {

  const { passes } = usePasses()
  // populateTestData()

  return (
    <table className='pass-list'>
      <colgroup className='columns'>
        <col className='columns__first-name' />
        <col className='columns__last-name' />
        <col className='columns__type' />
        <col className='columns__phone' />
      </colgroup>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Type</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {passes.map(pass =>
          <tr key={pass.id}>
            <td>{pass.firstName}</td>
            <td>{pass.lastName}</td>
            <td>{pass.type}</td>
            <td>{pass.phone}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}