'use strict';

import './styles/showcase.styl';

import React from 'react/addons';
import Router from 'react-router';
import Pages from '../src/showcase/index';

const {DefaultRoute, Link, Route, RouteHandler} = Router;

const Index = React.createClass({
  getInitialState() {
    return {
      navVisible: false
    };
  },

  _toggleNav() {
    this.setState({
      navVisible: !this.state.navVisible
    });
  },

  render() {
    return (
      <div className={this.state.navVisible ? 'is-navigable' : ''}>
        <div className='guide-nav'>
          <ol className='nav-list'>
            {Pages.map((page, index) => {
              return (
                <li key={index}>
                  <Link
                    className='guide-nav-link'
                    onClick={this._toggleNav}
                    to={page.props.route}>
                    <span className='guide-nav-item-reference'></span>
                    {page.props.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
        <div className='guide-slider-wrapper'>
          <header className='guide-header guide-slider'>
            <div onClick={this._toggleNav} className='guide-nav-toggle'>
              <i className="glyphicon glyphicon-th-list" />
            </div>
            <div className='guide-container'>
              React Showcase
            </div>
          </header>
          <div className='guide-content guide-slider'>
            <div className='guide-container'>
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const routes = (
  <Route name="index" path="/" handler={Index}>
    {Pages.map((page, index) => {
      if (page.props.route === 'home') {
        return <DefaultRoute name={page.props.route} handler={page.type} key={index} />;
      } else {
        return <Route name={page.props.route} handler={page.type} key={index} />
      }
    })}
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root-component'));
});
