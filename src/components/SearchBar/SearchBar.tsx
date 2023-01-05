import { ChangeEvent } from 'react'
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
    <label>
      <p>Search by name, type or phone number</p>
      <input type="search" onChange={handleSearch} />
    </label>
  )
}