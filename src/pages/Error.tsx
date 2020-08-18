import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorPage>
      <ErrorWrapper>
        <Error404>
          <Error404Title>Oops! Page not found</Error404Title>
          <Error404MessageWrapper>
            <Error404Message>4</Error404Message>
            <Error404Message>0</Error404Message>
            <Error404Message>4</Error404Message>
          </Error404MessageWrapper>
        </Error404>
          <a href="/"> Back Home</a>
      </ErrorWrapper>
    </ErrorPage>
  );
};

const ErrorPage = styled.div`
  position: relative;
  height: 100vh;
`;
const ErrorWrapper = styled.div`
  position: absolute;
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
const Error404 = styled.div`
  position: relative;
  height: 300px;
`;
const Error404Title = styled.h3`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.dark_gray};
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
`;

const Error404MessageWrapper = styled.h1`
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  letter-spacing: -40px;
  line-height: 200px;
  color: ${({ theme }) => theme.color.dark_gray};
`;

const Error404Message = styled.span`
  text-shadow: -8px 0px 0px #fff;
`;

export default Error;
