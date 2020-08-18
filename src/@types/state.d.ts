/**
 * Redux Inital State Types
 */
export interface AppState {
  status: RquestStatus;
  data: any[{ [key: string]: Array[] }];
}
