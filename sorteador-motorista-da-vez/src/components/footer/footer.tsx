import { useNavigate } from "react-router-dom"
import { useUserList } from "../../state/hook/useUserList"
import './Rodape.css'

export function Footer() {
 const list = useUserList()
 const path = useNavigate()

 const start = () => {
  path('/sort')
 }
  return(
    <footer className="footer-config">
      <button
        className="button"
        disabled={list.length < 3}
        onClick={start}
        >Start game
      </button>
      {/* <img src="/imagens/sacolas.png" alt="bags" /> */}
    </footer>
  )
}
