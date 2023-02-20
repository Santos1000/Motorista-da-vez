import { useRef, useState } from "react"


export function Form() {

  const [name, setName] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const AddName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={AddName}>
      <input
        ref={inputRef}
        value={name}
        onChange={event => setName(event.target.value)}
        type="text"
        placeholder="Enter participant names"/>
      <button disabled={!name}>Adicionar</button>
    </form>
  )
}
