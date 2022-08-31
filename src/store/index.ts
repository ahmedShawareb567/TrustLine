import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { PostReducer } from "./reducers/posts";
import { UtilReducer } from "./reducers/utils";

const rootReducer = combineReducers({
  utils: UtilReducer,
  post: PostReducer,
});

const store = configureStore({ reducer: rootReducer });

export { store };
