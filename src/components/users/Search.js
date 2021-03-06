import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
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
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
