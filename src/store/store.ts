

// set up the store

import { cartSlice } from "@/features/cart/catSlice";
import { countSlice } from "@/features/countSlice/countSlice";
import { ecommerceApi } from "@/services/ecommerceApi";
import { productApi } from "@/services/fakeStoreApi";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    // reducer
    reducer: {
      count: countSlice.reducer,
      cart: cartSlice.reducer,
      [ecommerceApi.reducerPath]: ecommerceApi.reducer,
      [productApi.reducerPath]:productApi.reducer

    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware, productApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']