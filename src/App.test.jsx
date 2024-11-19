import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

describe("App Component", () => {
  it('should render the title', () => {
    render(<App />)
    expect(screen.getByText('Vite + React + Commitando')).toBeInTheDocument()
  })

  it('should increment the count', async () => {
    render(<App />)
    
    const button = screen.getByRole('button', { name: "count is 0" })
    await userEvent.click(button)

    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })
})
