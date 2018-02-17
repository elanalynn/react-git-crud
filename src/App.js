import React, { Component } from 'react';
import Form from './Form';
import { CardList, data } from './CardList';

class App extends Component {

  render() { 
    return (
      <div>
          <Form />
          <CardList cards={data} />
      </div>
    );
  }
}

// ReactDOM.render(<CardList cards={data} />, document.getElementById('root'));
// ReactDOM.render(<Form />, document.getElementById('root'));

export default App;
