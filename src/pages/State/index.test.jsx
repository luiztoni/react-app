import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import State from './index'
 
test('State', () => {
  render(<State />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})