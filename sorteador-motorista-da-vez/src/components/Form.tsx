import { useRef, useState } from "react"
import { useAddParticipants } from "../state/hook/useAddParticipants"
import { useErrorMsg } from "../state/hook/useErrorMsg"


export function Form() {

  const [name, setName] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const AddName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName('')
    inputRef.current?.focus()
    addToList(name)
  }

  const addToList = useAddParticipants()
  
  const errorMsg = useErrorMsg()

  return (
    <form onSubmit={AddName}>
      <input
        ref={inputRef}
        value={name}
        onChange={event => setName(event.target.value)}
        type="text"
        placeholder="Enter participant names"/>
      <button disabled={!name}>Adicionar</button>
      {errorMsg && <span role="alert">{errorMsg}</span>}
    </form>
  )
}
