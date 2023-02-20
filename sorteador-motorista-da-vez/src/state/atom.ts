import { atom } from "recoil";

export const participantslistState = atom<string[]>({
  key: 'PartitipantslistState',
  default: []
})
