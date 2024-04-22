import { Link } from "react-router-dom";
import { CTALinkProps } from '@/src/interfaces/components/styled'
import { HiArrowRight } from "react-icons/hi";

export const CTABtnLink = ({
    text,
    href,
    relativePath,
    title,
    ctaArrow
}: CTALinkProps) => {
    return(
        <>
            <Link 
                to={href}
                title={title}
                target={relativePath ? "_top" : "_blank"}
                className="flex flex-row items-center text-xl px-3 py-1 rounded-md bg-amber text-charcoal font-semibold py-2 px-4 max-w-fit"
            >
                {text}
                <span className="">
                    {ctaArrow &&
                        <HiArrowRight strokeWidth={1} className="h-5 w-5 text-charcoal" />
                    }
                </span>
            </Link>
        </>
    )
}