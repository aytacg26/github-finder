import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { handleAlert } = useContext(AlertContext);
  const hasUsers = users.length > 0;
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      handleAlert('Please enter name to search', 'light');
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

export default Search;
