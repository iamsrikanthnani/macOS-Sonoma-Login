import React from "react";
import styled from "styled-components";
import AvatarImg from "../../assets/avatar.png";
const FooterContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

const Name = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
  font-family: "SF Pro Rounded Bold";
`;

const LoginInput = styled.input`
  width: 160px;
  padding: 8px 10px;
  border-radius: 100px;
  font-size: 16px;
  border: none;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  color: rgba(255, 255, 255, 0.7);
  &:focus {
    outline: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Avatar src={AvatarImg} alt="Avatar" />
      <Name>Srikanth Nani</Name>
      <LoginInput type="password" placeholder="Enter your password" />
    </FooterContainer>
  );
};

export default Footer;
