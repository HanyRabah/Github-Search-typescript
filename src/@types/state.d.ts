import RequestStatus from '../constants';
/**
 * Redux Inital State Types
 */
export interface AppState {
  status: RequestStatus;
  data: any[{ [key: string]: Array[] }];
}
