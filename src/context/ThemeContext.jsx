import { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light mode colors
                primary: {
                  main: '#1976d2',
                },
                secondary: {
                  main: '#9c27b0',
                },
                background: {
                  default: '#ffffff',
                  paper: '#ffffff',
                },
                text: {
                  primary: '#000000',
                  secondary: '#424242',
                },
              }
            : {
                // Dark mode colors
                primary: {
                  main: '#90caf9',
                },
                secondary: {
                  main: '#ce93d8',
                },
                background: {
                  default: '#000000',
                  paper: '#000000',
                },
              }),
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
