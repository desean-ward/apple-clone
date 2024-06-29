import tw from "tailwind-styled-components";

export const FooterContainer = tw.footer`
    py-5 
    sm:px-10 px-5
`;

export const FooterWrapper = tw.div`
    screen-max-width
`;

export const FooterInfo = tw.div`

`;

export const Divider = tw.div`
    bg-neutral-700 
    my-5 h-[1px] 
    w-full
`;

export const CopyrightAndLinks = tw.div`
    flex 
    md:flex-row flex-col 
    md:items-center justify-between
`;

export const FooterLinks = tw.div`
    flex
`;
