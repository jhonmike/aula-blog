import api from './api'

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts')
    return data
  } catch (error) {
    throw error
  }
}
