import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/cateoriesSlice";
import productsSlice from "./slice/productsSlice";
import { apiSlice } from "./slice/apiSlice";
import userSlice from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleweare) => getMiddleweare().concat(apiSlice.middleware),
});
