import React from "react"
import { render, screen } from "@testing-library/react"

import { Box } from "../Box"

describe("Box", () => {
  test("displays content", () => {
    render(<Box>Hello</Box>)
    const content = screen.getByText(/Hello/)
    expect(content).not.toBeUndefined()
    expect(content).toBeInTheDocument()
  })
})
