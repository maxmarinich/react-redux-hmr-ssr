# React Redux HMR SSR
## [_Isomorphic_](http://isomorphic.net/) web app boilerplate.

This is a simple boilerplate for web
development built on  [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/)
, containing modern web development
tools:
* React
* Redux
* [Connected React Router](https://github.com/supasate/connected-react-router) ( Integration with [React Router v4/v5](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) and Redux)
* [React Router Config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config) ( Static route config helpers )
* [Webpack v4](https://webpack.js.org)
* [Babel](https://babeljs.io/)
* [Koa](https://koajs.com/)
* [Node.js](https://nodejs.org/) v7.6.0 or higher


#### Previous version 
* __v1.0.0__ is [here](https://github.com/maxmarinich/react-redux-hmr-ssr/tree/express) (React Router Redux, Express ...)

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

### _Note_
* To avoid errors, connect `css` modules something like as follows (_with the file extension specifying_):
```javascript
  // for .js files
  
  import './styles/index.sass'
  import 'styles/index.sass' // if use aliases   
  
  // for .scss|sass files
  
  @import('./styles/index.sass')   
  @import ('~styles/index.sass') // if use aliases
  
```

##### _install dependencies_
```shell
npm i
```

##### _run_
For Development (HMR, SSR)

If `nodemon` not installed (for dev only)

```shell
npm i nodemon -g
npm start
```
else

```shell
npm start
```
* Dev server will listening on [`http://localhost:3000`](http://localhost:3000)

For Production (SSR)

```shell
npm run start:prod
```
