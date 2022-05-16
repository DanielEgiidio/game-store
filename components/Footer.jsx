import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2022 Gamer Store - Todos os Direitos Reservados</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillFacebook />
      </p>
    </div>
  );
};

export default Footer;
