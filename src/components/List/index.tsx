import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import { ListItemProps } from "../../@types/components";
import ListItem from "../ListItem";

const List: React.FC<ListItemProps> = (props: ListItemProps) => {
  const { data, category, loading, empty, failed, errorMessage } = props;
  return (
    <>
      {data && category &&
      <Wrapper aria-label="search-output">
        {empty && <Info>No Data Found!</Info>}
        {loading && !empty && <Loader />}
        {failed && <Alert>{errorMessage}</Alert>}
        {!loading && !empty && data &&  <ListItem data={data} category={category} />}
      </Wrapper>
    }
    </>
  );
};

const Wrapper = styled.div`
  margin: 12px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.color.info_text};
  background-color: ${({ theme }) => theme.color.info_background};
  border-color: ${({ theme }) => theme.color.info_border};
  position: relative;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 6px;
`;

const Alert = styled.div`
  color: ${({ theme }) => theme.color.alert_text};
  background-color: ${({ theme }) => theme.color.alert_background};
  border-color: ${({ theme }) => theme.color.alert_border};
  position: relative;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 6px;
`;

export default List;
