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
      light: '#EFC2D4',
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
      light: '#eaeaf2',
      text: '#374151'
    },
    selected: {
      background: '#e0f2fe',
      border: '#bae6fd',
      text: '#0369a1'
    },
    correct: {
      main: '#19E65D',
      transparent: '#ddfbe7',
      text: '#166534'
    },
    wrong: {
      main: '#E6196B',
      transparent: '#fbdde9'
    },
    lessonStatus: {
      correct: {
        main: '#19E65D',
        border: '#234F42'
      },
      incorrect: {
        main: '#E6196B',
        border: '#740a34ff'
      },
      current: {
        main: '#F0F0F5',
        border: '#7C7C7C'
      },
      unanswered: {
        main: 'transparent',
        border: '#7C7C7C'
      },
      explanation: {
        main: '#71B4EB',
        border: '#2b3e4dff'
      }
    }
  }
})

export default Theme
