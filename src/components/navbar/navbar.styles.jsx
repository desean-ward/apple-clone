import tw from "tailwind-styled-components";

export const Header = tw.header`
    z-10
    bg-black
    w-full
    screen-max-width
    py-5
    sm:px-10 px-5
    flex 
    justity-between
    items-center
    overflow-x-hidden
    overscroll-x-none
`;

export const Nav = tw.nav`
    flex
    w-full
`;

export const NavContent = tw.div`
    flex
    flex-1
    justify-center 
    max-sm:hidden
`;

export const NavItem = tw.div`
    px-5
    text-sm 
    cursor-pointer
    text-gray 
    hover:text-white 
    transition-all 
`;

export const SearchBagContainer = tw.div`
    flex 
    items-center 
    gap-7 
    max-sm:justify-end 
    max-sm:flex-1
`;

export const MobileNav = tw.div`
    flex 
    flex-col
    justify-center
    bg-black
    fixed
    inset-0
    w-full
    z-20
    opacity-0
    hidden
    overscroll-none
    overflow-hidden
`;

export const CloseButtonContainer = tw.div`
    w-screen
    flex 
    justify-end
    p-5
`;

export const MobileNavContent = tw.div`
    absolute
    top-[-4rem]
    h-full
    screen-max-width
    flex
    flex-col
    items-center
    justify-center
    flex-1
    gap-8
`;
