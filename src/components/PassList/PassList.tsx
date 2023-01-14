import { useEffect, useState } from 'react'
import { usePasses } from '../../context/PassProvider'
import { Pass } from '../../interfaces/passes'
import SortButton from '../SortButton/SortButton'
import './PassList.scss'
import PassListRow from './PassListRow/PassListRow'

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
      <tbody>
        {shownPasses.map(pass =>
          <PassListRow key={pass.id} pass={pass} />
        )}
      </tbody>
    </table>
  )
}