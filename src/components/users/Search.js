import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    hasUsers: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === '') {
      this.props.setAlert('Please enter name to search', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { hasUsers, clearUsers } = this.props;
    const searchBtn = !hasUsers ? (
      <input type='submit' value='Search' className='btn btn-dark btn-block' />
    ) : null;

    const clearBtn = hasUsers ? (
      <button className='btn btn-light btn-block' onClick={clearUsers}>
        Clear
      </button>
    ) : null;

    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='search'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.handleChange}
          />
          {searchBtn}
        </form>
        {clearBtn}
      </div>
    );
  }
}

export default Search;
