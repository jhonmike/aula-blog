import { describe, expect, it, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import * as servicePost from "../services/post"
import PostList from './PostList'

vi.mock("../services/post")

describe("PostList Component", () => {
  it("should render the list of posts", async () => {
    servicePost.getPosts.mockResolvedValue([
      { id: 1, title: 'Primeiro Post', summary: 'Este é o resumo do primeiro post', author: 'João', date: '01/01/2021' },
      { id: 2, title: 'Segundo Post', summary: 'Este é o resumo do segundo post', author: 'Maria', date: '02/01/2021' },
    ])

    render(<PostList />)

    await waitFor(() => {
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
})
