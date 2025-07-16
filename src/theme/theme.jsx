import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
      }
    }
  }
})

export default theme
