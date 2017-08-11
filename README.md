# React Redux HMR SSR
## [_Isomorphic_](http://isomorphic.net/) web app boilerplate.

This is a simple boilerplate for web
development built on  [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/)
, containing modern web development
tools:
* React
* Redux
* [React Router Redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) ( Integration with [React Router v4](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) and Redux)
* [React Router Config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config) ( Static route config helpers )
* [Webpack v3](https://webpack.js.org)
* [Babel](https://babeljs.io/)
* [Express](http://expressjs.com)
* [Nmp](https://www.npmjs.com/) package + [Node.js](https://nodejs.org/) v6.* or newer

### _Goals_

* Isomorphic App - application that can run both client-side and server-side.
* Hot Module Reloading - replaces modules that have been changed in real time while preserving the state.
* Server Side Rendering - renders pages on the initial stage for fast page loads and search engine optimization.
* Code Splitting - split code into bundles so that code is asynchronously loaded by the client.
* Development / Production Mods.

## How to use
##### _clone the project_
```shell
git clone https://github.com/maxmarinich/react-redux-hmr-ssr.git
```
##### _install dependencies_
```shell
npm i
```

##### _run_
For Development (HMR, SSR)
```shell
npm start
```
* Dev server will listening on [`http://localhost:3000`](http://localhost:3000)

For Production (SSR)

```shell
npm run start:prod
```
