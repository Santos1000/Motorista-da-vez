import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { Configuration } from "./configuration"

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useUserList: () => mockNavigation
  }
})

describe('configuration page', () => {
  test('render configuration page', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuration/>
      </RecoilRoot>
    )

    expect(container).toMatchSnapshot()
  })
})
