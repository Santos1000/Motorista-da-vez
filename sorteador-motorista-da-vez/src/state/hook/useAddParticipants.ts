import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, participantslistState } from "../atom"

export const useAddParticipants = () => {
  const setList = useSetRecoilState(participantslistState)
  const list = useRecoilValue(participantslistState)
  const setError = useSetRecoilState(errorState)

  return (userName: string) => {
    if (list.includes(userName)) {
      setError("It's not allowed duplicate names")
      return
    }
    return setList(currentList => [...currentList, userName])
  }
}
