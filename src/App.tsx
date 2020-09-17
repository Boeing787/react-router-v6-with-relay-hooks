import React from 'react';
import { RelayEnvironmentProvider, preloadQuery } from 'react-relay/hooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import ConferencesQuery from './__generated__/ConferencesQuery.graphql';
import { relayEnvironment } from './relay/Environment';

const conferencesQuery = () =>
  preloadQuery(
    relayEnvironment,
    ConferencesQuery,
    {},
    {
      fetchPolicy: 'store-or-network',
    }
  );

export const App = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <React.Suspense fallback="Loading">
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" preload={conferencesQuery} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
};
