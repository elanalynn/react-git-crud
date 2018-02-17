import React, { Component } from 'react';
import './CardList.css';

const data = [
  {
    avatar_url: "https://avatars3.githubusercontent.com/u/7654369?v=4",
    login: "elanalynn",
    name: "Elana Kopelevich",
    followers: 3
  },
  {
    avatar_url: "https://avatars3.githubusercontent.com/u/867477?v=4",
    login: "discypher",
    name: "Shad Self",
    followers: 2098
  },  
  {
    avatar_url: "https://avatars1.githubusercontent.com/u/22600426?v=4",
    login: "DaemonSpelledWrong",
    name: "Damon Self",
    followers: 20
  }, 
]

class CardList extends Component {

  constructor(props) {
    super(props)
  }

  render() { 
    return (
      <div className="card-list">
        {this.props.cards.map(card => <Card {...card} />)}
      </div>
    );
  }
}

const Card = props => {
  return (
    <div className="card">
    <img src={props.avatar_url} />
      <div>
        <div>{props.login}</div>
        <div>{props.name}</div>
        <div>Followers: {props.followers}</div>
      </div>
    </div>
  )
}

export { CardList, data };
