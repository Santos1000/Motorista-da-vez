// import { useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useUserList } from "../../state/hook/useUserList"

export function Footer() {
 const list = useUserList()
 const path = useNavigate()

 const start = () => {
  path('/sort')
 }
  return(
    <footer>
      <button disabled={list.length < 3} onClick={start}>Start game</button>
    </footer>
  )
}
