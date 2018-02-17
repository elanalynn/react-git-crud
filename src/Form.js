import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Form;