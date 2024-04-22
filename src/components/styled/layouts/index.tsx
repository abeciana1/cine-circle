import { PageSectionProps } from '@/src/interfaces'

export const PageSection = ({
    children
}: PageSectionProps) => {
    return(
        <section className="py-8 md:py-16 md:px-24">
            { children }
        </section>
    )
}