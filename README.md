# React Router V6 + Relay Hooks POC

**Please note that this repo is merely a work in progress and is currently not yet ready for use. It does not work and should not be taken as a successful example of React Router v6 and Relay hooks working together.**

```bash
yarn

export API_URL='https://api.react-finland.fi/graphql'

yarn start

```

- This repo uses the react-finland graphql test project found at https://api.react-finland.fi/graphql to provide a live graphql interface to work with.

- This repo also defines routes as objects, using the `useRouter` hook.

- There is one query -- `ConferencesQuery` -- which will serve as the proof of concept query for preloading in this repo.
