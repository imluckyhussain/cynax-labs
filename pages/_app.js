import './common.scss';
import Head from 'next/head'
import { useMediaQuery, BottomNavigation, BottomNavigationAction } from '@mui/material/';
import CodeIcon from '@mui/icons-material/Code';
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
      <Head>
        <title>Cynax Ticket App | Mubaraque Hussain</title>
        <link rel="icon" href="/MH-Logo.ico" />
      </Head>

      <Component { ...{ ...pageProps, fullScreen } } />

      <BottomNavigation showLabels value={'author'} className="footerNav">
        <BottomNavigationAction
          label="Developed by Mubaraque Hussain"
          icon={<CodeIcon />}
          value={'author'}
          className="author"
          onClick={() => window.open('https://imhussa.in', '_blank')}
        />
      </BottomNavigation>
    </ThemeProvider>
  )
}