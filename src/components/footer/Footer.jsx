import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        
        <div className="infoText">
          Discover the latest movie trailers and dive into detailed film
          information with Movix Glow, your go-to movie streaming website.
          Explore trailers, read brief overviews, and learn about directors,
          writers, and cast members for a comprehensive movie browsing
          experience. Stay updated with trending trailers and new releases,
          ensuring you never miss out on the next big hit.
        </div>
        <div className="socialIcons">
          <a
            className="icon"
            href="https://www.facebook.com/profile.php?id=100066982691947&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="icon"
            href="https://github.com"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/anas-mohamed-2b967b241/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
