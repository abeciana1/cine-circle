import { Link } from "react-router-dom";
import { NavLinkProps } from '@/src/interfaces'

const NavLink = ({
    text,
    href,
    title
}: NavLinkProps) => {
    return(
        <li>
            <Link
                className='text-offWhite text-decoration-underline text-3xl'
                to={href}
                title={title}
            >
                { text }
            </Link>
        </li>
    )
}

export default NavLink