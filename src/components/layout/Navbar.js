import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Will be converted to functional based component
class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} style={{ marginRight: 6 }} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
