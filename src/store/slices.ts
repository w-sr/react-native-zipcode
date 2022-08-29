import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';

import { AddressType } from './types';

const address = createSlice({
  name: 'getZipcode',
  initialState: {} as AddressType,
  reducers: {
    setZipcode: (_, { payload }: PayloadAction<AddressType>) => payload,
  },
});

const isLoading = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (_, { payload }: PayloadAction<boolean>) => payload,
  },
});

export const { setZipcode } = address.actions;
export const { setIsLoading } = isLoading.actions;

export default combineReducers({
  address: address.reducer,
  isLoading: isLoading.reducer,
});
