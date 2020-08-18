import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import { AppState } from "../@types/state";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer<AppState>(persistConfig, reducer);
const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);

const configureStore = (): { store: any; persistor: any } => {
  return { store, persistor };
};

export default configureStore;
