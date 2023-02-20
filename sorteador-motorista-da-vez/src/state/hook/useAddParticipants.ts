import { useSetRecoilState } from "recoil"
import { participantslistState } from "../atom"

export const useAddParticipants = () => {
  const setList = useSetRecoilState(participantslistState)
  return (userName: string) => {
    return setList(currentList => [...currentList, userName])
  }
}
