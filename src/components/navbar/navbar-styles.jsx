import tw from 'tailwind-styled-components';

export const Header = tw.header`
    w-full
    py-5
    sm:px-10 px-5
    flex 
    justity-between
    items-center
`

export const Nav = tw.nav`
    flex
    w-full 
    screen-max-width 
`

export const NavContent = tw.div`
    flex
    flex-1
    justify-center 
    max-sm:hidden
`

export const NavItem = tw.div`
    px-5
    text-sm 
    cursor-pointer
    text-gray 
    hover:text-white 
    transition-all 
`

export const SearchBagContainer = tw.div`
    flex 
    items-baseline 
    gap-7 
    max-sm:justify-end 
    max-sm:flex-1
`