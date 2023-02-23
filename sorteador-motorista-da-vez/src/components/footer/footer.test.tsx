import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useUserList } from "../../state/hook/useUserList";
import { Footer } from "./footer";

const mockNavigation = jest.fn()
const button = screen.getByRole('button')

jest.mock('../../state/hook/useUserList', () => {
  return {
    useUserList: jest.fn()
  }
})

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation
  }
})

describe('There is not enough participants', () => {
  beforeEach(() => {
    (useUserList as jest.Mock).mockReturnValue([])
  })
  test('Disable raffle when there are few users', () => {

    render(
        <RecoilRoot>
          <Footer />
        </RecoilRoot>)
  })

  expect(button).toBeDisabled()
})

describe('There is more then 3 participants', () => {
  const mockList = ['Ana', 'Amanda', 'Jorge']
  beforeEach(() => {
    (useUserList as jest.Mock).mockReturnValue(mockList)
  })
  test('Raffle when there are few users', () => {

    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>)
  })

  expect(button).not.toBeDisabled()

  test('Navigation is working', () => {

    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>)
  })
  fireEvent.click(button)
  expect(mockNavigation).toHaveBeenCalledTimes(1)
  expect(mockNavigation).toHaveBeenCalledWith('/sort')
})
