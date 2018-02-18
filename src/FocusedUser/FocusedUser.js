import React, { Component } from 'react';
import Card from '../shared/Card/Card';
import './FocusedUser.css';

class FocusedUser extends Component {
  render(){
    return (
      <div>
        <Card {...this.props.focusedUser} key={this.props.focusedUser.id}/>
      </div>
    )
  }
}

export default FocusedUser;
