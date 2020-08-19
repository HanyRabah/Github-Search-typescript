import { AnyAction } from "redux";
import { RequestStatus } from "../../constants";
import { AppState } from "../../@types/state";
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_LOADING,
  FETCH_DATA_FAILED,
  EMPTY_DATA,
  CLEAR_STATUS
} from "../actions";

let initialState = { status: RequestStatus.Pending, data: {}};

const reducer = (state: AppState = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return { ...state, status: RequestStatus.Loading };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        status: RequestStatus.Success,
      };
    case EMPTY_DATA:
      return { ...state, status: RequestStatus.Empty };
    case FETCH_DATA_FAILED:
      return { ...state, status: RequestStatus.Failure };
    case CLEAR_STATUS:
      return { ...state, status: RequestStatus.Pending };
    default:
      return state;
  }
};

export default reducer;
