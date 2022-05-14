import './common.scss';
import { useMediaQuery } from '@mui/material/';
import {
  useTheme,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#0EBAFE',
      main: '#5E7BFD',
      dark: '#3A53A2',
    },
    secondary: {
      light: '#EBD4F7',
      main: '#FFC5F6',
      dark: '#FF9FB1',
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={lightTheme}>
      <Component { ...{ ...pageProps, fullScreen } } />
    </ThemeProvider>
  )
}