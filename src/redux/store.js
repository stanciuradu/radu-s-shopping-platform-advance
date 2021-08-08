// ->parte de set-up pentru crearea store-ului
import { createStore } from "redux";
import cartReducer from "./cart/cartReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// creem obiectul de configurare pentru persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = createStore(persistedReducer);

export const persistedStore = persistStore(store);
