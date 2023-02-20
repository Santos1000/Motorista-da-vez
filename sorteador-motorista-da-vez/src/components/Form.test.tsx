import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

test('If o input is not input, new users can not be added', () => {
  render (
    <Form/>
  )

  const input = screen.getByPlaceholderText('Enter participant names')
  const button = screen.getByRole('button')

  expect(input).toBeInTheDocument()
  expect(button).toBeDisabled()
})

test('Add a participant when a name is called', () => {
  render(
    <Form />
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
