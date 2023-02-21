import { render, screen } from '@testing-library/react'
import { RecoilRoot } from "recoil"
import React from 'react'
import { List } from "./participantList"
import { isJSDocUnknownTag } from 'typescript'

describe('lista vazia', () => {
  test('alal', () => {
    render(
      <RecoilRoot>
        <List/>
      </RecoilRoot>)

    const itens = screen.queryAllByRole('itenList')
    expect(itens).toHaveLength(0)
  })
})

describe('lista preenchida', () => {
  const mockList = ['Ana', 'Amanda']
  test('lista preenchida renderizada', () => {
    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>)

    const itens = screen.queryAllByRole('itenList')
    expect(itens).toHaveLength(mockList.length)
  })
})
