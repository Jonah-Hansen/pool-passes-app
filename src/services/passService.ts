import { v4 as uuid } from 'uuid';
import { Pass } from "../interfaces/passes";

export const getAll = (): Pass[] => {
  //get passes from local storage
  const all: string | null = localStorage.getItem('passes')
  //early return if empty
  if (!all) return []
  //return array of pass objects
  return JSON.parse(all)
}

export const add = (newPass: Pass): Pass => {
  const all = getAll()
  newPass.id = uuid()
  all.push(newPass)
  localStorage.setItem('passes', JSON.stringify(all))
  return newPass
}

export const clear = () => {
  if (
    window.confirm('are you sure you want to delete all passes? This action cannot be undone.')
  ) {
    localStorage.removeItem('passes')
    alert('all passes have been removed')
  }
}

export const update = (newPass: Pass) => {
  const all = getAll()
  const originalIndex = all.indexOf(all.filter(pass => pass.id === newPass.id)[0])
  all.splice(originalIndex, 1, newPass)
  localStorage.setItem('passes', JSON.stringify(all))
}