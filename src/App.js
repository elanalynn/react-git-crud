import React, { Component } from 'react';
import Form from './Form';
import CardList from './CardList';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      cards: []
    }
  }

  addCard = card => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(card)
    }));
  }

  render() { 
    return (
      <div>
          <h3>Find Github Users</h3>
          <Form onSubmit={this.addCard}/>
          <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
