import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './app/App.tsx';
import './assets/css/index.css';
import './assets/css/scrollbar.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <StyledEngineProvider injectFirst>
      <CssBaseline />
      <App />
  </StyledEngineProvider>
)
