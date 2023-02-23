import { render, screen } from '@testing-library/react'
import { RecoilRoot } from "recoil"
import React from 'react'
import { List } from "./participantList"
import { useUserList } from '../../state/hook/useUserList'

jest.mock('../../state/hook/useUserList', () => {
  return {
    useUserList: jest.fn()
  }
})

describe('Should be a empty list', () => {
  beforeEach(() => {
    (useUserList as jest.Mock).mockReturnValue([])
  })
  test('Rendered empty list', () => {
    render(
      <RecoilRoot>
        <List/>
      </RecoilRoot>)

    const itens = screen.queryAllByRole('itenList')
    expect(itens).toHaveLength(0)
  })
})

// describe('Should exist a list', () => {
//   const mockList = ['Ana', 'Amanda']
//   beforeEach(() => {
//     (useUserList as jest.Mock).mockReturnValue(mockList)
//   })

//   test('Rendered populated list', () => {
//     render(
//       <RecoilRoot>
//         <List />
//       </RecoilRoot>)

//     const itens = screen.queryAllByRole('itenList')
//     expect(itens).toHaveLength(mockList.length)
//   })
// })
