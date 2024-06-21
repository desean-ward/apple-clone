import tw from "tailwind-styled-components";

export const HeroContainer = tw.section`
    w-full 
    nav-height 
    bg-black 
    relative
`;
export const HeroContent = tw.div`
    h-5/6 //83% of the viewport height
    w-full 
    flex-center 
    flex-col
`;

export const VideoContainer = tw.div`
    md:w-10/12 w-9/12 //83%/75% of the viewport width
`;

export const HeroCallToAction = tw.div`
    flex 
    flex-col 
    items-center 
    opacity-0
    translate-y-20 // translate 80px down
`;
