export interface Error {
  valid: boolean,
  message: string,
}

export interface ErrorState {
  firstName: Error,
  lastName: Error,
  phone: Error,
}

export const defaultErrorState = {
  firstName: { valid: true, message: '' },
  lastName: { valid: true, message: '' },
  phone: { valid: true, message: '' },
}