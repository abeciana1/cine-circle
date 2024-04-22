// compiled navbar
import { NavBar, NavLink } from '@/src/components'

const SiteWideNav = () => {
    return(
        <NavBar>
            <img
                src='fontbolt.png'
                width={345}
                height={79}
                alt="logo image"
                className='block sm:hidden w-56'
            />
            <div className='flex gap-20 items-center'>
                <NavLink
                    href='/movies'
                    text='Movies'
                    title='link to movies page'
                />
                <img
                    src='fontbolt.png'
                    width={345}
                    height={79}
                    alt="logo image"
                    className='hidden sm:block w-32 sm:w-56 md:w-72'
                />
                <NavLink
                    href='/about'
                    text='About'
                    title='link to about page'
                />
            </div>
        </NavBar>
    )
}

export default SiteWideNav