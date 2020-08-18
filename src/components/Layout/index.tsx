import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../Header';
import { LayoutProps } from '../../@types/components'

function Layout(props: LayoutProps) {
  const { children, emptyKeyword } = props;
  return (
    <Container empty={emptyKeyword}>
      <Header />
      {children}
    </Container>
  );
}

const Container = styled.div<{ empty?: boolean; }>`
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  max-width: 1024px;
  transition: margin-top 0.3s ease-in-out;
  ${(props) => props.empty &&
    css`
    margin-top: 20%;
  `}
`;

export default Layout;
