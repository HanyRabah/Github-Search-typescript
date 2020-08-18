import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import SearchInput from "../TextInput";
import Dropdown from "../Dropdown";
import { DROPDOWN_OPTIONS } from "../../constants";
import { SearchBoxProps } from '../../@types/components'

const SearchBox: React.FC<SearchBoxProps> = ({ keyword, category }: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState(keyword || "");
  const [selectValue, setSelectValue] = useState(category || "users");
  const [validInput, setValidInput] = useState(true);
  const history = useHistory();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setInputValue(searchQuery);
    if(searchQuery.length > 0 && searchQuery.length < 4) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
    setUrlQuery(searchQuery, selectValue);
  }
  
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setUrlQuery(inputValue, category);
    setSelectValue(category);
  };
 
  const setUrlQuery = (keyword: string, category: string) => {
    keyword.length < 4 ? history.push(`/`) : history.push(`?category=${category}&keyword=${keyword}`);
  }

  return (
    <SearchForm>
        <SearchInput
          type="text"
          name="keyword"
          aria-label="search-input"
          value={inputValue}
          onChange={handleInputChange}
          minLength={4}
          placeholder="Start typing to search.."
          valid={validInput}
          autoComplete="off"
        />
        <Dropdown
          aria-label="search-select"
          options={DROPDOWN_OPTIONS}
          defaultValue={selectValue}
          onChange={handleSelectChange}
        />
         <button hidden type="submit" />
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 400px;
  box-sizing: border-box;
  padding: 0 12px;
  margin: 0 auto 24px;
`;

export default SearchBox;
