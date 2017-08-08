import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header } from '../components/Header';


export default class AppRoot extends React.PureComponent {
  render() {
    const { routes } = this.props.route;

    return(
      <div className="app">
        <Header />
        <main className="s-main">
          { renderRoutes(routes) }
        </main>
      </div>
    );
  }
}
