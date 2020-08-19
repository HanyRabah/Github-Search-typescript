/*
 * action types
 */
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
export const EMPTY_DATA = "EMPTY_DATA";
export const CLEAR_STATUS = "CLEAR_STATUS";
/*
 * action creators
 */
export const fetchDataSuccess = (payload: object) => ({ type: FETCH_DATA_SUCCESS, payload});
export const fetchDataFailed = () => ({ type: FETCH_DATA_FAILED });
export const fetchDataLoading = () => ({ type: FETCH_DATA_LOADING });
export const setEmptyData = () => ({ type: EMPTY_DATA });
export const clearStauts = () => ({type: CLEAR_STATUS})







