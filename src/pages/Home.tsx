import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../@types/state";
import { RquestStatus } from "../constants";
import { Layout, SearchBox, List, useDebounce } from "../components";
import {
  fetchDataSuccess,
  fetchDataFailed,
  fetchDataLoading,
  setEmptyData,
  setCachedData,
  clearStaus,
} from "../store/actions";
import fetchData from "../service";
import { getObjectFromString }  from '../utils'

const Home: React.FC = () => {
  const [listData, setListData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const status = useSelector((state: AppState) => state.status);
  const stateData = useSelector((state: AppState) => state.data);
  const { search } = useLocation();
  const { category, keyword } = getObjectFromString(search);
  const debouncedKeyword = useDebounce(keyword, 300);
  const debouncedCategory = useDebounce(category, 300);
  const dispatch = useDispatch();

  const handleSearchRequest = async () => {
    dispatch(fetchDataLoading());
    const data = await fetchData(keyword, category)
      .then((res) => {
        setErrorMessage("");
        dispatch(fetchDataSuccess({ [`${keyword}-${category}`]: res.items }));
        return checkEmptyData(res.total_count) ? [] : res.items;
      })
      .catch((error) => {
        dispatch(fetchDataFailed());
        setErrorMessage(error.message);
        return [];
      });

    return data;
  };

  const checkEmptyData = (count: number) => {
    if (count < 1) {
      dispatch(setEmptyData());
      return true;
    }
    return false;
  };

  useEffect(() => {
    const key = `${debouncedKeyword}-${debouncedCategory}`;
    const handleSearch = async () => {
      const data: any = await handleSearchRequest();
      setListData(data);
    };

    if (!debouncedKeyword || !debouncedCategory) {
      dispatch(clearStaus());
      setListData([]);
      return;
    }

    if (stateData[key]) {
      setListData(stateData[key]);
      dispatch(setCachedData());
      checkEmptyData(stateData[key].length);
    } else {
      handleSearch();
    }
  }, [debouncedKeyword, debouncedCategory]);

  return (
    <Layout emptyKeyword={listData.length < 1}>
      <SearchBox
        category={category}
        keyword={keyword}
      />
      <List
        loading={status === RquestStatus.Loading}
        empty={status === RquestStatus.Empty}
        failed={status === RquestStatus.Failure}
        errorMessage={errorMessage}
        data={listData}
        category={category}
      />
    </Layout>
  );
};

export default Home;
