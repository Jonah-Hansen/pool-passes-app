import { Dispatch } from 'react'
import { MdExpandMore, MdUnfoldMore } from 'react-icons/md'
import { Pass } from '../../interfaces/passes'
import './SortButton.scss'

interface SortButtonProps {
  sort: string,
  setSort: Dispatch<React.SetStateAction<keyof Pass>>,
  field: keyof Pass,
}

export default function SortButton({ sort, setSort, field }: SortButtonProps) {
  return (
    <button onClick={() => setSort(field)} className='sort-btn' >
      {field === sort ?
        <MdExpandMore />
        :
        <MdUnfoldMore />
      }
    </button>
  )
}