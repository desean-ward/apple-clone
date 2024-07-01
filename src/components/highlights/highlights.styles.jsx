import tw from "tailwind-styled-components";

export const HighlightsContainer = tw.section`
    w-screen 
    overflow-hidden 
    h-full 
    common-padding 
    bg-zinc 
`;

export const HighlightsContent = tw.div`
    screen-max-width 
`;

export const HighlightsTitle = tw.h1`
    mb-12 
    w-full 
    md:flex
    items-end 
    justify-between
`;

export const HighlightsLinksContainer = tw.div`
    flex 
    flex-wrap 
    items-end 
    gap-5
`;
