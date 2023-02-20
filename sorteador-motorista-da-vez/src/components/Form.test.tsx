import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";
import { RecoilRoot } from "recoil";

test('If o input is not input, new users can not be added', () => {
  render (
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  )

  const input = screen.getByPlaceholderText('Enter participant names')
  const button = screen.getByRole('button')

  expect(input).toBeInTheDocument()
  expect(button).toBeDisabled()
})

test('Add a participant when a name is called', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  )
  const input = screen.getByPlaceholderText('Enter participant names')
  const button = screen.getByRole('button')

  // insert a input value
  fireEvent.change(input, {
    target: {
      value: 'Ana Beatriz'
    }
  })
  // click a submit button
  fireEvent.click(button)
  // garantee the focus active
  expect(input).toHaveFocus()
  //guarantee the input will be clean
  expect(input).toHaveValue('')
})

// test('Not allowed duplicate names', () => {
//   render(
//     <RecoilRoot>
//       <Form />
//     </RecoilRoot>
//   )
//   const input = screen.getByPlaceholderText('Enter participant names')
//   const button = screen.getByRole('button')

//   fireEvent.change(input, {
//     target: {
//       value: 'Ana Beatriz'
//     }
//   })
//   fireEvent.click(button)
//   fireEvent.change(input, {
//     target: {
//       value: 'Ana Beatriz'
//     }
//   })

//   fireEvent.click(button)

//   const errorMsg = screen.getByRole("alert", { level: 2 });
//   expect(errorMsg.textContent).toBe("It's not allowed duplicate names")
// })
