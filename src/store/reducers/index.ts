import { AnyAction } from "redux";
import { RquestStatus } from "../../constants";
import { AppState } from "../../@types/state";
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_LOADING,
  FETCH_DATA_FAILED,
  EMPTY_DATA,
  CLEAR_STATUS
} from "../actions";

let initialState = { status: RquestStatus.Pending, data: {}};

const reducer = (state: AppState = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return { ...state, status: RquestStatus.Loading };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        status: RquestStatus.Success,
      };
    case EMPTY_DATA:
      return { ...state, status: RquestStatus.Empty };
    case FETCH_DATA_FAILED:
      return { ...state, status: RquestStatus.Failure };
    case CLEAR_STATUS:
      return { ...state, status: RquestStatus.Pending };
    default:
      return state;
  }
};

export default reducer;
