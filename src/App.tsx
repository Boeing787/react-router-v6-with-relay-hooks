import React from 'react';
import { RelayEnvironmentProvider, preloadQuery } from 'react-relay/hooks';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Home } from './Home';
import ConferencesQuery from './__generated__/ConferencesQuery.graphql';
import { relayEnvironment } from './relay/Environment';

const conferencesQuery = () => {
  const preloadedQuery = preloadQuery(
    relayEnvironment,
    ConferencesQuery,
    {},
    {
      fetchPolicy: 'store-or-network',
    }
  );

  return {
    data: preloadedQuery,
  };
};

const Routes = () => {
  const element = useRoutes([
    {
      element: <Home />,
      path: '/',
      preload: conferencesQuery,
    },
  ]);

  return element;
};

export const App = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <React.Suspense fallback="Loading">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
};
