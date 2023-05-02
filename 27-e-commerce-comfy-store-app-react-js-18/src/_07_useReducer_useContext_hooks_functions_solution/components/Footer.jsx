import { FooterWrapper } from "./styleWrappers";

export default function Footer() {
  return (
    <FooterWrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span>ComfySloth</span>
        All rights reserved
      </h5>
    </FooterWrapper>
  );
}
