import { TextTailwindColor } from '@/src/enums'

export interface HeroNoImageProps {
    headlineText: string;
    headlineTextColor: TextTailwindColor;
    bodyText: string;
    ctaHref: string;
    ctaText: string;
    ctaArrow: boolean;
    ctaAllyTitle: string;
    ctaRelativePath: boolean;
}