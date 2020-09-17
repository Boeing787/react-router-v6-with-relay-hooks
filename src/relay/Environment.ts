import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
} from 'relay-runtime';
import { RequestParameters } from 'relay-runtime/lib/util/RelayConcreteNode';
import {
  Variables,
  CacheConfig,
} from 'relay-runtime/lib/util/RelayRuntimeTypes';

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });

export const fetchQuery = async (
  operation: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig
) => {
  const queryId = operation.text || '';
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig?.force;

  const fromCache = cache.get(queryId, variables);

  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  const response = await fetch(process.env.API_URL || '', {
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const json = await response.json();

  if (isQuery && json && queryId !== '') {
    cache.set(queryId, variables, json);
  }

  if (isMutation) {
    cache.clear();
  }

  return json;
};

export const relayEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
