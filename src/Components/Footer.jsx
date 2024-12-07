import React from "react";
import DH from "../img/DH.png";
import FACE from "../img/ico-facebook.png";
import INS from "../img/ico-instagram.png";
import WTS from "../img/ico-whatsapp.png";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={DH} alt="DH-logo" />
      <img src={FACE} style={{ width: 50 }} alt="face-logo" />
      <img src={INS} style={{ width: 50 }} alt="instagram-logo" />
      <img src={WTS} style={{ width: 50 }} alt="whastapp-logo" />
    </footer>
  );
};

export default Footer;
