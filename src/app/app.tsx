import { StrictMode } from 'react';

import { MantineProvider } from '@mantine/core';

import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './providers';
import queryClient from './react-query';
import { MANTINE_THEME } from './styles';
import './styles/common.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider theme={MANTINE_THEME}>
          <Router />
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
