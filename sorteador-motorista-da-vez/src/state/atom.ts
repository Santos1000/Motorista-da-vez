import { atom } from "recoil";

export const participantslistState = atom<string[]>({
  key: 'ParticipantslistState',
  default: []
})


export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})
