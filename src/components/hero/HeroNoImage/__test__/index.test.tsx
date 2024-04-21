import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import HeroNoImage from '@/src/components/hero/HeroNoImage'

describe('HeroNoImage', () => {
    beforeEach(() => {
        render(<HeroNoImage/>)
    })

    it('should render an H1 heading', () => {
        const heading = screen.getByRole('heading', {
            level: 1
        })
        expect(heading).toBeInTheDocument()
    })

    it('should render a text body', () => {
        const textBody = screen.getByTestId('hero-body')
        expect(textBody).toBeInTheDocument()
    })

    it('should render a cta button link', () => {
        const ctaButtonLink = screen.getByRole('link')
        expect(ctaButtonLink).toHaveAttribute('href', '/movies')
    })
})