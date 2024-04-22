import NavLink from '@/src/components/navigation/NavLink'
import NavBar from '@/src/components/navigation/NavBar'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'

describe('NavBar', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <NavBar>
                    <NavLink
                        href='/movies'
                        text='test'
                        title='link to movies page'
                    />
                    <img
                        src='./public/fontbolt.png'
                        width={345}
                        height={79}
                        alt="logo image"
                    />
                    <NavLink
                        href='/movies'
                        text='test'
                        title='link to movies page'
                    />
                </NavBar>
            </MemoryRouter>
        )
    })

    it('should render an element with a navigation role', () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
    })

    it('should render a list as the first child within the nav element', () => {
        const nav = screen.getByRole('navigation')
        expect(nav.firstChild).toHaveRole('list')
    })

    it('should have a logo image', () => {
        const logo = screen.getByRole('img')
        expect(logo).toBeInTheDocument()
    })

    it('should have at least one child that is a link', () => {
        const links = screen.getAllByRole('link')
        expect(links.length).toBeGreaterThan(0)
    })
})