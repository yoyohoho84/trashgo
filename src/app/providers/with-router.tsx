import { Suspense, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

import { PagesEnum } from 'shared/types/enums';

const NotFoundPage = lazy(() => import('pages/not-found'));
const ClientsPage = lazy(() => import('pages/clients'));
const MainPage = lazy(() => import('pages/main'));

export enum RouterPathEnum {
  CLIENTS = `/${PagesEnum.CLIENTS}`,
}

export const Router = () => {
  const router = useRoutes([
    {
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: RouterPathEnum.CLIENTS,
          element: <ClientsPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense>{router}</Suspense>;
};
