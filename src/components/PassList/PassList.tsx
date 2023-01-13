import { useEffect, useState } from 'react'
import { usePasses } from '../../context/PassProvider'
import { Pass } from '../../interfaces/passes'
import SortButton from '../SortButton/SortButton'
// import { populateTestData } from '../../helpers/testData'

import './PassList.scss'
import PassListBody from './PassListBody/PassListBody'

export default function PassList() {

  const { passes } = usePasses()
  const [shownPasses, setShownPasses] = useState(passes)
  const [sort, setSort] = useState<keyof Pass>('lastName')

  useEffect(() => {
    const passesCopy = [...passes]
    setShownPasses(passesCopy.sort((a, b) => a[sort]!.toLowerCase() < b[sort]!.toLowerCase() ? -1 : 1))
  }, [passes, sort])

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
          <th>
            First Name
            <SortButton field='firstName' sort={sort} setSort={setSort} />
          </th>
          <th>
            Last Name
            <SortButton field='lastName' sort={sort} setSort={setSort} />
          </th>
          <th>
            Type
            <SortButton field='type' sort={sort} setSort={setSort} />
          </th>
          <th>
            Phone
          </th>
        </tr>
      </thead>
      <PassListBody shownPasses={shownPasses} />
    </table>
  )
}