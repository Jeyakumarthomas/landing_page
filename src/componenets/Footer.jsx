import React from "react";
import FooterFrame from "./footerComponents/FooterFrame.jsx";
import FooterMain from "./footerComponents/FooterMain.jsx";

const Footer = () => {
  return (
    <div id="FAQ" className="mt-10 flex flex-col gap-10 bg-silver">
      <FooterFrame />

      <FooterMain />
    </div>
  );
};

export default Footer;
