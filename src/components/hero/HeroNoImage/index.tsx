import { HeroNoImageProps } from '@/src/interfaces/components/hero'
import { H1, CTABtnLink } from '@/src/components'

const HeroNoImage = ({
    headlineText,
    headlineTextColor,
    bodyText,
    ctaHref,
    ctaText,
    ctaArrow,
    ctaAllyTitle,
    ctaRelativePath
}: HeroNoImageProps) => {
    return(
        <section className='text-center'>
            <H1
                text={headlineText}
                color={headlineTextColor}
            />
            <div
                data-testid="hero-body"
                className='py-5 text-xl text-offWhite'
            >
                { bodyText }
            </div>
            <div className='flex justify-center'>
                <CTABtnLink
                    text={ctaText}
                    href={ctaHref}
                    ctaArrow={ctaArrow}
                    title={ctaAllyTitle}
                    relativePath={ctaRelativePath}
                />
            </div>
        </section>
    )
}

export default HeroNoImage