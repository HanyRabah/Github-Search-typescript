import React from "react";
import styled from "styled-components";
import { TextInputProps } from "../../@types/components";


const SearchInput = (props:TextInputProps) => {
  const { valid, minLength, ...rest } = props;
  return (
    <InputWrapper>
      <Input {...rest} />
      {!valid && (
        <InputValidety>Text should be more than { minLength } characters</InputValidety>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
`;

const InputValidety = styled.span`
  position: absolute;
  bottom: -20px;
  left: 0;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.extra_small};
  margin: 0;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  width: 230px;
  color: ${({ theme }) => theme.color.dark_gray};
  &:invalid {
    border: 2px solid ${({ theme }) => theme.color.alert_border};
    &:after {
      content: "too Short";
      position: absolute;
      top: 10px;
      left: 10px;
      color: black;
    }
  }
  &:invalid:focus {
    background: ${({ theme }) => theme.color.alert_background};
  }
`;

export default SearchInput;
