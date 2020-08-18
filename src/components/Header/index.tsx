import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/icons/gitHubLogo.svg';

const Header: React.FC = () => {
  return (
    <HeaderWrapper href="/">
      <HeaderLogo/>
      <div>
        <HeaderTitle>GitHub Searcher</HeaderTitle>
        <HeaderText className="header-text">Search users or repositories below</HeaderText>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.a`
  display: flex;
  padding: 12px;
  width: 400px;
  box-sizing: border-box;
  text-decoration: none;
  margin: 0 auto 12px;
`;

const HeaderLogo = styled(Logo)`
  width: 42px;
  height: 42px;
  margin-right: 16px;
`;

const HeaderTitle = styled.h3`
  font-size: ${({theme}) => theme.fontSize.large};
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
  margin: 0;
  text-align: left;
`;

const HeaderText = styled.p`
  font-size: ${({theme}) => theme.fontSize.small};
  font-weight: 600;
  color: gray;
  margin: 0;
  text-align: left;
`;

export default Header;
