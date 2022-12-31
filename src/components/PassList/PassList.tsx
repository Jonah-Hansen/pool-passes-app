import { useEffect, useState } from 'react'
// import { populateTestData } from '../../helpers/testData'
import { Pass } from '../../interfaces/passes'
import * as passService from '../../services/passService'
import './PassList.scss'

export default function PassList() {

  // populateTestData()

  const [passes, setPasses] = useState<Pass[]>([])

  useEffect(() => {
    setPasses(passService.getAll)
  }, [])

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