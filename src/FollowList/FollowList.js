import React, { Component } from 'react';
import Card from '../shared/Card/Card';
import './FollowList.css';

class FollowList extends Component {

  render() { 
    return (
      <div className="follow-list">
        {this.props.followList.map(card => <Card {...card} key={card.id}/>)}
      </div>
    );
  }
}

export default FollowList;
