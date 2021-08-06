import { render, screen } from '@testing-library/react'
import { Button } from '.'
import { FaSave } from 'react-icons/fa'

describe('<Button/>', () => {
  it('should have a title inside', () => {
    render(<Button title="Button" background="#fff" icon={FaSave} />)

    expect(screen.getByText('Button'))
  })
})
