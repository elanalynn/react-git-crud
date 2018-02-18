import React, { Component } from 'react'
import Search from './Search/Search'
import FocusedUser from './FocusedUser/FocusedUser'
import FollowList from './FollowList/FollowList'
import './App.css'

class App extends Component {

  state = {
    focusedUser: {
      id: '7654361',
      avatar_url: 'https://avatars3.githubusercontent.com/u/7654369?v=4' ,
      login: 'elanalynn',
      name: 'Elana Kopelevich',
      public_repos: 209,
      following: 70,
      followers: 64
    },
    followList: []
  }

  setUser = newUser => {
    this.setState(prevState => ({
      focusedUser: newUser
    }));
    this.getFollowers(newUser.following_url, newUser.followers_url)
  }

  getFollowers = (followingList, followersList) => {
    fetch(followersList).then(res => { 
      res.json().then(data => {
        data.forEach(user => {
          fetch(`https://api.github.com/users/${user.login}`).then(res => {
            res.json().then(follower => {
              this.createFollowList(follower)
            })
          })
        })
      })
    })
  }

  createFollowList = (follower) => {
    this.setState(prevState => ({ 
      followList: prevState.followList.concat(follower)
  }));
  }

  render() { 
    return (
      <div className="container">
        <div>
        <h3>Search for a Github User</h3>
          <Search onSubmit={this.setUser}/>
          <FocusedUser focusedUser={this.state.focusedUser} />
        </div>
        <div>
          <h3>See how they Stack Up</h3>
          <p>This list consists of everyone the user follows and is followed by</p>
          <FollowList followList={this.state.followList} />
        </div>
      </div>
    )
  }
}

export default App
