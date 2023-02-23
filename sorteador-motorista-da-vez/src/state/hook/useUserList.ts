import { useRecoilValue } from "recoil"
import { participantslistState } from "../atom"

export const useUserList = () => {
  return useRecoilValue(participantslistState)
}
