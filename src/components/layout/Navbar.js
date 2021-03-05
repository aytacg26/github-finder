import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} style={{ marginRight: 5 }} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
