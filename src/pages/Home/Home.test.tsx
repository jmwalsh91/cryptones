import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { Home } from '.'

describe('<Home />', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const [title, description] = screen.getAllByRole('heading')

    expect(title).toHaveTextContent('Home Page')
    expect(description).toHaveTextContent('This is the home page description')
  })
})
