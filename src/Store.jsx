import { configureStore, createReducer } from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from './Features/productsSlice';
import cartReducer from './Features/cartSlice';
import productsApi from './Features/productsApi';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());