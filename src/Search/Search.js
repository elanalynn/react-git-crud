import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  state = {
    userName: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.getUserData(this.state.userName);
    this.setState({userName: ''})
  }

  getUserData = username => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (res.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + res.status);
        return;
      }
  
      res.json().then(data => {
        this.props.onSubmit(data);
      });
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
               placeholder="Github username" 
               value={this.state.userName}
               onChange={event => this.setState({ userName: event.target.value })}
               required/>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search;