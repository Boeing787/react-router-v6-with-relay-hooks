import { graphql } from 'react-relay/hooks';

export const ConferencesQuery = graphql`
  query ConferencesQuery {
    allConferences {
      id
    }
  }
`;
