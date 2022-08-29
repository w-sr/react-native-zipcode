import { createAction } from '@reduxjs/toolkit';

import { GetAddressApiPayload } from './types';

export const getZipcodeApi =
  createAction<GetAddressApiPayload>('getZipcodeApi');

export const clearStore = createAction('clearStore');
