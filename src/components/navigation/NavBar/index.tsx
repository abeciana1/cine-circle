import { NavBarProps } from '@/src/interfaces'

const NavBar = ({
    children
}: NavBarProps) => {
    return(
        <nav className="py-10">
            <ul className="flex items-center justify-center gap-5 sm:gap-20 w-full flex-col sm:flex-row">
                {children}
            </ul>
        </nav>
    )
}

export default NavBar