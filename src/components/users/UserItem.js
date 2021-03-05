import React from 'react';
import PropTypes from 'prop-types';

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
        <a href={userLink} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
