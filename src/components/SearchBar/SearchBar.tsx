import { ChangeEvent } from 'react'
import { MdSearch } from 'react-icons/md'
import { usePasses } from '../../context/PassProvider'
import * as passService from '../../services/passService'
import './SearchBar.scss'

export default function SearchBar() {

  const { setPasses } = usePasses()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const allPasses = passService.getAll()
    setPasses(allPasses.filter((pass) => Object.values(pass).join('').toLowerCase().includes(e.target.value.toLocaleLowerCase())))
  }

  return (
    <label className='search-bar'>
      <p className='search-bar__label'>Search by name, type or phone number</p>
      <MdSearch className='search-bar__icon' />
      <input className='search-bar__input' type="search" placeholder='Search' onChange={handleSearch} />
    </label>
  )
}