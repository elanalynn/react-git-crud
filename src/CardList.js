import React, { Component } from 'react';
import './CardList.css';

class CardList extends Component {
  render() { 
    return (
      <div className="card-list">
        {this.props.cards.map(card => <Card {...card} key={card.id}/>)}
      </div>
    );
  }
}

const Card = props => {
  return (
    <div className="card">
    <img src={props.avatar_url} alt='user avatar'/>
      <div>
        <div><strong>{props.login}</strong></div>
        <div>{props.name}</div>
        <div>Followers: {props.followers}</div>
      </div>
    </div>
  )
}

export default CardList;
