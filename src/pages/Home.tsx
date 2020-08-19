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
  clearStauts
} from "../store/actions";
import fetchData from "../service";
import { getObjectFromString }  from '../utils'

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const status = useSelector((state: AppState) => state.status);
  const cachedData = useSelector((state: AppState) => state.data);
  const { search } = useLocation();
  const { category, keyword } = getObjectFromString(search);
  const debouncedKeyword = useDebounce(keyword, 300);
  const dispatch = useDispatch();

  const handleSearchRequest = async () => {
    dispatch(fetchDataLoading());
    return await fetchData(keyword, category)
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
  };

  const checkEmptyData = (count: number) => {
    if (count < 1) {
      dispatch(setEmptyData());
      return true;
    }
    return false;
  };

  const isDataCached = (key: string) => {
    if(cachedData[key]){
      setData(cachedData[key]);
      checkEmptyData(cachedData[key].length);
      return true;
    }
    return false;
  }

  useEffect(() => {
    const handleSearch = async () => {
      const res: any = await handleSearchRequest();
      setData(res);
    };

    if (!debouncedKeyword || !category) {
        dispatch(clearStauts());
        setData([]);
      return;
    }

    if (!isDataCached(`${debouncedKeyword}-${category}`)) {
      handleSearch();
    }

  }, [debouncedKeyword, category]);

  return (
    <Layout emptyKeyword={data.length < 1}>
      <SearchBox
        category={category}
        keyword={keyword}
      />
      <List
        loading={status === RquestStatus.Loading}
        empty={status === RquestStatus.Empty}
        failed={status === RquestStatus.Failure}
        errorMessage={errorMessage}
        data={data}
        category={category}
      />
    </Layout>
  );
};

export default Home;
