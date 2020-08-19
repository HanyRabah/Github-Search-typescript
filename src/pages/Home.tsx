import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../@types/state";
import { RequestStatus } from "../constants";
import { Layout, SearchBox, List, useDebounce } from "../components";
import {
  fetchDataSuccess,
  fetchDataFailed,
  fetchDataLoading,
  setEmptyData,
  clearStatus
} from "../store/actions";
import fetchData from "../service";
import { getObjectFromString }  from '../utils'

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { data: cachedData, status } = useSelector((state: AppState)  => state);
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

  const isDataCached = (key: string, cb: Function) => {
    if(cachedData[key]){
      setData(cachedData[key]);
      checkEmptyData(cachedData[key].length);
      return;
    }
    return cb();
  }

  useEffect(() => {
    const handleSearch = async () => {
      const res: any = await handleSearchRequest();
      setData(res);
    };

    if (!debouncedKeyword || !category) {
        dispatch(clearStatus());
        setData([]);
      return;
    }
    isDataCached(`${debouncedKeyword}-${category}`, handleSearch)
  }, [debouncedKeyword, category]);

  return (
    <Layout emptyKeyword={data.length < 1}>
      <SearchBox
        category={category}
        keyword={keyword}
      />
      <List
        loading={status === RequestStatus.Loading}
        empty={status === RequestStatus.Empty}
        failed={status === RequestStatus.Failure}
        errorMessage={errorMessage}
        data={data}
        category={category}
      />
    </Layout>
  );
};

export default Home;
