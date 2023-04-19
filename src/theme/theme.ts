import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '80px',
          fontSize: '18px',
        },
        sizeSmall: {
          fontSize: '16px',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: 'white',
            color: 'black',
            textTransform: 'capitalize',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: 'white',
            borderWidth: '2px',
            backgroundColor: 'transparent',
            color: 'white',
            textTransform: 'capitalize',
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'white',
          '& .MuiInputBase-input': {
            textAlign: 'center',
            color: 'white',
            fontSize: 44,
            fontFamily: 'Inter',
          },
          '& .MuiInput-underline: before': {
            borderBottomColor: 'white',
          },
        },
      },
    },
  },
  palette: {
    secondary: {
      main: '#8FF870',
      contrastText: '#323232',
      light: '#C6FBB7',
    },
    primary: {
      main: '#FFFFFF',
      contrastText: '#FFFFFF',
      light: '#8A8A8A',
    },
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1400,
    },
  },
});
