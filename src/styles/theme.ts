import { extendTheme } from '@mui/joy/styles'

const theme = extendTheme({
  fontFamily: {
    body: 'var(--font-vazir)'
  },
  fontSize: {
    md: '1.1rem'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          500: '#1a1a1f'
        },
        background: {
          body: '#151517'
        }
      }
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '& path': {
            strokeWidth: 1
          }
        }
      }
    }
  }
})

export default theme
