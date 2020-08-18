import React from "react";
import styled from "styled-components";
import { DropdownOption, DropdownProps } from '../../@types/components'

const Select = ( props: DropdownProps) => {
  const { options, ...rest } = props;
  return (
    <SelectInput
      { ...rest }
    >
      {options.map((item: DropdownOption) => (
        <option key={item.value} value={item.value}>{item.text}</option>
      ))}
    </SelectInput>
  );
};

const SelectInput = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  width: 115px;
  color: ${({theme}) => theme.color.dark_gray};
  background-image: linear-gradient(45deg, transparent 50%, ${({theme}) => theme.color.gray} 50%),
    linear-gradient(135deg, ${({theme}) => theme.color.gray} 50%, transparent 50%);
  background-position: calc(100% - 15px) calc(1em + 2px),
    calc(100% - 10px) calc(1em + 2px);
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  -webkit-appearance: none;
`;

export default Select;
