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