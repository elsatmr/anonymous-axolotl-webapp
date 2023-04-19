import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import UserInputPage from './pages/UserInputPage/UserInputPage';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import PreferencePage from './pages/PreferencePage/PreferencePage';
import { Provider } from 'react-redux';
import { store } from './redux';
import HomePage from './pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/input',
    element: <UserInputPage />,
  },
  {
    path: '/preference',
    element: <PreferencePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
