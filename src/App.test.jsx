import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('demo', () => {
  expect(1 + 1).toBe(2)
})

describe('App', () => {
  it('should render the App component', () => {
    render(<App />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })

  it('should increment the count', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'count is 0'} ))
    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })
})
