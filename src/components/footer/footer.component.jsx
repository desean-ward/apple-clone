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
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{" "}
            <span className="text-blue underline">Find an Apple Store</span> or{" "}
            <span className="text-blue underline">other retailer</span> near
            you.
          </p>

          <p className="text-xs font-semibold text-gray">
            Or call 000800-040-1966
          </p>
        </FooterInfo>

        {/* Divider line */}
        <Divider />

        {/* Footer links */}
        <CopyrightAndLinks>
          {/* Copyright text */}
          <p className="text-xs font-semibold text-gray">
            Copyright &copy;{new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          {/* Footer links */}
          <FooterLinks>
            {footerLinks.map((link, i) => (
              <p key={link} className="text-xs font-semibold text-gray">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
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
