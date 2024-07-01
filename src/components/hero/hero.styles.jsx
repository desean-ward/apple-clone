import tw from "tailwind-styled-components";

export const HeroContainer = tw.section`
    w-full 
    nav-height 
    bg-black 
    relative
    top-[-4rem]
`;
export const HeroContent = tw.div`
    h-5/6 //83% of the viewport height
    w-full 
    flex-center 
    flex-col
`;

export const VideoContainer = tw.div`
    w-9/12 md:w-[1220px] 
    h-[300px]
`;

export const HeroCallToAction = tw.div`
    flex 
    flex-col 
    items-center 
    opacity-0
    translate-y-20 // translate 80px down
`;
