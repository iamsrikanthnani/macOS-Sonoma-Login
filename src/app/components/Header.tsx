import React from "react";
import styled from "styled-components";
import ToolbarImg from "../../assets/toolbar.png";
const HeaderContainer = styled.div`
  position: absolute;
  padding: 8px 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
  backdrop-filter: blur(1px);
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
`;

const IconWrapper = styled.img`
  height: 24px;
  margin-right: 32px;
  float: right;
  filter: brightness(0) invert(1);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <IconWrapper src={ToolbarImg} />
    </HeaderContainer>
  );
};

export default Header;
