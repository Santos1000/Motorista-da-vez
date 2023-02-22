import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"

describe('configuration page', () => {
  test('render configuration page', () => {
    render(
      <RecoilRoot>
        <Configuration/>
      </RecoilRoot>
    )
  })
})
