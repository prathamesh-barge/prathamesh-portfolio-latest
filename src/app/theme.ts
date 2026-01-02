'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "16px", // 👈 CRITICAL
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "16px",
        },
      },
    },
  },
});


export default theme;