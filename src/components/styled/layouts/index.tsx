import { PageSectionProps } from '@/src/interfaces'

export const PageSection = ({
    children
}: PageSectionProps) => {
    return(
        <section className="py-16 px-24">
            { children }
        </section>
    )
}