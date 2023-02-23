import { useUserList } from "../../state/hook/useUserList"

export function List() {
  const list: string[] = useUserList()
  return (
    <ul>
      {list.map(nameOnList =>
      <li>
          key={nameOnList}
          {nameOnList}
      </li>)}
    </ul>
  )
}
