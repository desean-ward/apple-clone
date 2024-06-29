import { footerLinks } from "@/constants";
import React from "react";
import {
  CopyrightAndLinks,
  Divider,
  FooterContainer,
  FooterInfo,
  FooterLinks,
  FooterWrapper,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterInfo>
          <p className='font-semibold text-gray text-xs'>
            More ways to shop:{" "}
            <span className='underline text-blue'>Find an Apple Store</span> or{" "}
            <span className='underline text-blue'>other retailer</span> near
            you.
          </p>

          <p className='font-semibold text-gray text-xs'>
            Or call 000800-040-1966
          </p>
        </FooterInfo>

        {/* Divider line */}
        <Divider />

        {/* Footer links */}
        <CopyrightAndLinks>
          {/* Copyright text */}
          <p className='font-semibold text-gray text-xs'>
            Copyright &copy;{new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          {/* Footer links */}
          <FooterLinks>
            {footerLinks.map((link, i) => (
              <p key={link} className='font-semibold text-gray text-xs'>
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className='mx-2'>|</span>
                )}
              </p>
            ))}
          </FooterLinks>
        </CopyrightAndLinks>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
