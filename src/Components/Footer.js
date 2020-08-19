import React from "react";
import styled from "styled-components";
const FooterStyle = styled.footer`
  width: 100%;
  height: 80px;
  background: #03a9f4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

function Footer() {
  return <FooterStyle>&copy; Byeonguk 2020 All right reserved.</FooterStyle>;
}

export default Footer;
