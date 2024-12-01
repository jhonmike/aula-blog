import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import PostList from './PostList'

describe("PostList Component", () => {
  it("should render the list of posts", () => {
    render(<PostList />)

    expect(screen.getByText('Primeiro Post')).toBeInTheDocument()
    expect(screen.getByText('Este é o resumo do primeiro post')).toBeInTheDocument()
    expect(screen.getByText(/João/)).toBeInTheDocument()
    expect(screen.getByText(/01\/01\/2021/)).toBeInTheDocument()

    expect(screen.getByText('Segundo Post')).toBeInTheDocument()
    expect(screen.getByText('Este é o resumo do segundo post')).toBeInTheDocument()
    expect(screen.getByText(/Maria/)).toBeInTheDocument()
    expect(screen.getByText(/02\/01\/2021/)).toBeInTheDocument()
  })
})
