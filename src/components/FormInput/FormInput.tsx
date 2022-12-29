import './FormInput.scss'

interface FormInputProps {
  type: string,
  label: string,
  name: string,
  value?: string,

}

export default function FormInput({ type, label, name, value }: FormInputProps) {
  return (
    <label className={`form-input__${type}`}>
      {type === 'radio' ?
        <>
          <input type={type} name={name} value={value} />
          <p>{label}</p>
        </>
        :
        <>
          <p>{label}</p>
          <input type={type} name={name} defaultValue={value} />
        </>}
    </label >
  )
}