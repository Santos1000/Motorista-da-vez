import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const useErrorMsg = () => {
  const message = useRecoilValue(errorState)
  return message;
}
