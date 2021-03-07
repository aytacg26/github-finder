import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setAlert, searchUsers, hasUsers, clearUsers }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter name to search', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

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
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='search'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={handleChange}
        />
        {searchBtn}
      </form>
      {clearBtn}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  hasUsers: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
