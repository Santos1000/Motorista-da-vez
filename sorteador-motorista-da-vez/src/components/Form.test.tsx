import React from "react";
import { render, screen } from "@testing-library/react";
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
)
