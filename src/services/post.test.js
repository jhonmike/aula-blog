import { describe, it, expect, vi } from "vitest"
import api from "./api"
import { getPosts } from "./post"

vi.mock('./api')

describe("Post Service", () => {
  it('should return an array of posts', async () => {
    const mockPosts = [{ id: 1, title: 'Mock Post' }]
    api.get.mockResolvedValue({ data: mockPosts })

    const posts = await getPosts()
    expect(posts).toEqual(mockPosts)
  })

  it('should throw an error if the request fails', async () => {
    const error = new Error('Request failed')
    api.get.mockRejectedValue(error)

    await expect(getPosts()).rejects.toThrow(error)
  })
})
