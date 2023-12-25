import React, { createContext, useReducer } from 'react';

import { ActionType } from '../../../@types/action';
import { CHANGE_THEME } from '../actionType';
import themes from '../../theme/themes';

type DarkProps<T> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: K extends `${infer Prefix}_dark` ? K : never;
}[keyof T];

type PropsWithoutDark<T> = Omit<T, DarkProps<T>>;

export type ThemeState = {
  theme: 'default' | keyof PropsWithoutDark<typeof themes>;
  darkMode: boolean | null;
};

const initialState = {
  theme: 'default',
  darkMode: null,
} as ThemeState;
const themeReducer = (state = initialState, action: ActionType) => {
  const { theme, darkMode } = action?.payload;
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: typeof theme !== 'undefined' ? theme : 'default',
        darkMode: darkMode,
      };
    default:
      return state;
  }
};

export const ThemeContext = createContext({
  theme: 'default',
  darkMode: false,
  updateTheme: (theme?: string, darkMode?: boolean) => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const updateTheme = (theme?: string, darkMode?: boolean) => {
    dispatch({
      type: CHANGE_THEME,
      payload: {
        theme,
        darkMode,
      },
    });
  };

  return <ThemeContext.Provider value={{ updateTheme, theme: state.theme, isDarkMode: state.darkMode }}>{children}</ThemeContext.Provider>;
};
