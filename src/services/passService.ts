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
  localStorage.removeItem('passes')
}

export const update = (newPass: Pass) => {
  const all = getAll()
  const originalIndex = all.findIndex(pass => pass.id === newPass.id)
  all.splice(originalIndex, 1, newPass)
  localStorage.setItem('passes', JSON.stringify(all))
}

export const remove = (id: Pass['id']) => {
  const all = getAll()
  const originalIndex = all.findIndex(pass => pass.id === id)
  all.splice(originalIndex, 1)
  localStorage.setItem('passes', JSON.stringify(all))
}