import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (defaultTheme) => ({
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          width: '100%',
          height: '100%',
          background: defaultTheme.palette.grey[200],
        },
        '#app': {
          width: '100%',
          height: '100%',
        },
      }),
    },
  },
  typography: {
    fontFamily: '"Quicksand"',
    h5: {
      fontFamily: '"Amatica SC"',
      fontWeight: 900,
      fontSize: '2rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      lineHeight: 1,
    },
  },
});

export default theme;