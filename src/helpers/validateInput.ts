import { Error } from "../interfaces/error"


export const name = (name: string): Error => {
  if (name.length < 2) return { valid: false, message: 'name must be at least 2 characters' }
  return { valid: true, message: '' }
}

export const phone = (phone: string): Error => {
  //remove non numbers from from string
  const s = phone.split('').filter(char => char !== ' ' && !Number.isNaN(Number(char)))
  //return false is not enough numbers
  if (s.length !== 10) return {
    valid: false,
    message: 'phone number must be 10 digits'
  }
  return {
    valid: true,
    message: `(${s[0] + s[1] + s[2]}) ${s[3] + s[4] + s[5]}-${s[6] + s[7] + s[8] + s[9]}`
  }
}