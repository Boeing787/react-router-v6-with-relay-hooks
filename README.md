# React Router V6 + Relay Hooks POC

```bash
yarn

export API_URL='https://api.react-finland.fi/graphql'

yarn start

```

- This repo uses the react-finland graphql test project found at https://api.react-finland.fi/graphql to provide a live graphql interface to work with.

- This repo also defines routes as objects, using the `useRouter` hook.

- There is one query -- `ConferencesQuery` -- which will serve as the proof of concept query for preloading in this repo.
