import React, { createContext, useReducer } from 'react';

import { ActionType } from '../../../@types/action';
import { UPDATE_LOADER } from '../actionType';

interface LoaderState {
  isLoading: boolean;
}

const initialState = {
  isLoading: false,
};

const loaderReducer = (state: LoaderState = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const LoaderContext = createContext({
  isLoading: false,
});

export const LoaderProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(loaderReducer, initialState);

  return <LoaderContext.Provider value={{ dispatch, isLoading: state.isLoading }}>{children}</LoaderContext.Provider>;
};
