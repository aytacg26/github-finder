import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };

  render() {
    const { login, avatar_url: avatar, html_url: userLink } = this.state;

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
  }
}

export default UserItem;
