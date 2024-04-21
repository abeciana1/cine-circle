import { HeadingProps } from '@/src/interfaces'

export const H1 = ({
    text,
    color
}: HeadingProps) => {
    return (
        <h1
            className={'text-4xl font-bold leading-tight mt-0 mb-2 ' + color}
        >
            { text }
        </h1>
    )
}

export const H2 = ({
    text,
    color
}: HeadingProps) => {
    return(
        <h2
            className={'text-3xl font-bold leading-tight mt-2 mb-2 ' + color}
        >
            { text }
        </h2>
    )
}

export const H3 = ({
    text,
    color
}: HeadingProps) => {
    return(
        <h3
            className={'text-2xl font-semibold leading-normal mt-2 mb-1 ' + color}
        >
            { text }
        </h3>
    )
}

export const H4 = ({
    text,
    color
}: HeadingProps) => {
    return(
        <h4
            className={'text-xl font-semibold mt-2 mb-1 ' + color}
        >
            { text }
        </h4>
    )
}

export const H5 = ({
    text,
    color
}: HeadingProps) => {
    return(
        <h5
            className={'text-lg font-medium mt-1 mb-1 ' + color}
        >
            { text }
        </h5>
    )
}

export const H6 = ({
    text,
    color
}: HeadingProps) => {
    return(
        <h6
            className={'text-base font-medium mt-1 mb-1 ' + color}
        >
            { text }
        </h6>
    )
}
