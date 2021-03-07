import React, { useEffect, Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

const User = ({ match }) => {
  const { user, getUser, loading, getUserRepos, repos } = useContext(
    GithubContext
  );

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        <i className='fas fa-search'></i>
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times text-danger'></i>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt={login}
            title={name}
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location : {location}</p>
        </div>
        <div>
          {bio ?? (
            <Fragment>
              <p>{bio}</p>
            </Fragment>
          )}
          <br />
          <a
            href={html_url}
            className='btn btn-dark my-1'
            target='_blank'
            rel='noreferrer'
          >
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username : </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company : </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website : </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers : {followers}</div>
        <div className='badge badge-success'>Following : {following}</div>
        <div className='badge badge-light'>Public Repos : {public_repos}</div>
        <div className='badge badge-dark'>Public Gists : {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
