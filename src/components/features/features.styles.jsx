import tw from "tailwind-styled-components";

export const FeaturesContainer = tw.section`
    h-full 
    bg-zinc 
    relative 
    overflow-hidden
`;
export const FeaturesContent = tw.div`
    screen-max-width 
`;

export const SectionHeaderContainer = tw.div`
    mb-12 
    w-full
`;

export const ContentContainer = tw.div`
    flex 
    flex-col 
    justify-center 
    overflow-hidden
`;

export const ContentHeader = tw.div`
    mt-12 md:mt-32 
    mb-24 
    pl-8 md:pl-24
`;

export const VideoAndImagesContainer = tw.div`
    flex-center 
    flex-col 
    sm:px-10
`;

export const VideoContainer = tw.div`
    relative 
    h-[50vh] 
    w-full 
    flex 
    items-center
    mb-5
`;

export const ImagesContainer = tw.div`
    flex 
    flex-col 
    w-full 
    relative
`;

export const FeatureImage = tw.div`
    overflow-hidden 
    flex-1 
    h-[50vh]
`;
