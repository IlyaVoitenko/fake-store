import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";
import authReducer from "./reducers/auth";
import loadingReducer from "./reducers/loading";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    loading: loadingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
