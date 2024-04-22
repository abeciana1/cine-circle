import NavLink from '@/src/components/navigation/NavLink'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'

describe('NavLink', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NavLink
                    href='/movies'
                    text='test'
                    title='link to movies page'
                />
            </MemoryRouter>
        )
    })

    it('should render a link with an href', () => {
        const navLink = screen.getByRole('link')
        expect(navLink).toHaveAttribute('href', '/movies')
    })

    it('should render a link with text', () => {
        const navLink = screen.getByRole('link', {
            name: 'test'
        })
        expect(navLink).toBeInTheDocument()
    })

    it('should render a link within a listitem', () => {
        const listItem = screen.getByRole('listitem')
        expect(listItem).toBeInTheDocument()
        expect(listItem.firstChild).toHaveRole('link')
    })
})