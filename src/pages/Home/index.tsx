import {
    HeroNoImage,
    PageSection
} from '@/src/components'
import { TextTailwindColor } from '@/src/enums'

const Home = () => {

    return (
        <>
            <PageSection>
                <HeroNoImage
                    headlineText='Explore the World of Movies with CineCircle!'
                    headlineTextColor={TextTailwindColor.OffWhite}
                    bodyText="Discover your next favorite movie effortlessly. Search through an extensive database of films, get tailored recommendations, and instantly find out where to watch them online. Dive into a seamless cinematic experience with CineCircle, no sign-up required!"
                    ctaText="Explore Now"
                    ctaAllyTitle="link to search for movies"
                    ctaHref="/movies"
                    ctaArrow
                    ctaRelativePath
                />
            </PageSection>
        </>
    )
}

export default Home