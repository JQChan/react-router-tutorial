import React from 'react';
import NavLink from './NavLink';

export default React.createClass({
  render () {
    return (
      <div>
        <h2>Repos</h2>
        <ul role="nav">
            <li><NavLink to="/repos/facebook/react">React</NavLink></li>
            <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})