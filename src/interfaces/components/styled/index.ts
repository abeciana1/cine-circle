import { TextTailwindColor } from '@/src/enums'

export interface HeadingProps {
    text: string;
    color: TextTailwindColor;
}

export interface LinkProps {
    text: string;
    href: string;
    relativePath: boolean;
    title: string;
}

export interface CTALinkProps extends LinkProps {
    ctaArrow: boolean;
}

export interface PageSectionProps {
    children: React.ReactNode | React.ReactNode[]
}