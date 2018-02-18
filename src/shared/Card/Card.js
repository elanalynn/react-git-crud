import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card">
      <img src={props.avatar_url} alt='user avatar'/>
      <div className="user-data">
        <div className="header">{props.login}</div>
        <p>Name: {props.name}</p>
        <p>Repos: {props.public_repos}</p>
        <p>Following: {props.following}</p>
        <p>Followers: {props.followers}</p>
      </div>
    </div>
  )
}

export default Card;
