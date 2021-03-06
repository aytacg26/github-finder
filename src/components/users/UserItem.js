import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
  const { login, avatar_url: avatar, html_url: userLink } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar}
        alt={login}
        className='round-img'
        style={{ width: 60 }}
        title={login}
      />
      <h2>{login}</h2>
      <div>
        <NavLink to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          Profile
        </NavLink>
        <a
          href={userLink}
          className='btn btn-dark btn-sm my-1'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github'></i>
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
