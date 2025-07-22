import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (defaultTheme) => ({
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
          background: defaultTheme.palette.grey[200]
        },
        '#app': {
          width: '100%',
          height: '100%'
        }
      })
    }
  },
  typography: {
    fontFamily: '"Quicksand"',
    h5: {
      fontFamily: '"Amatica SC"',
      fontWeight: 900,
      fontSize: '2rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      lineHeight: 0.5
    }
  },
  palette: {
    primary: {
      main: '#AC2C5F',
      disabled: '#D6C2CA'
    },
    secondary: {
      main: '#F8B195',
      light: '#FDE6DE'
    },
    action: {
      disabled: 'white',
      disabledBackground: '#D6C2CA'
    },
    berryGrey: {
      main: '#C4C4DF',
      light: '#eaeaf2'
    },
    correct: {
      main: '#19E65D',
      transparent: '#19E65D26'
    },
    wrong: {
      main: '#E6196B',
      transparent: '#E6196B26'
    },
    lessonStatus: {
      correct: {
        main: '#4B8F7AFF',
        border: '1px solid #234F42'
      },
      incorrect: {
        main: '#DD5E55FF',
        border: '1px solid #B71C1C'
      },
      current: {
        main: '#D7D7D7',
        border: '1px solid #7C7C7C'
      },
      unanswered: {
        main: 'transparent',
        border: '1px solid #7C7C7C'
      }
    }
  }
})

export default Theme
