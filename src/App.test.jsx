import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "./App"

vi.mock("./components/PostList")

describe("App Component", () => {
  it('should render the title', () => {
    render(<App />)
    expect(screen.getByText('Bem-vindo ao Blog Commitando')).toBeInTheDocument()
  })
})
