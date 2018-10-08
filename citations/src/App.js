import React, { Component } from 'react';
import './App.css';
import Display from './Display';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citations: {},
    };
  }

componentDidMount() {
  this.getCitations();
}

  

  getCitations() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
    .then(results => results.json())
    .then(data => {
      this.setState({
        citations: data[0],
      });
    });
}



  render() {

    return (
      <div className="App">
        <Display citations={this.state.citations}/>
        <button onClick={() => this.getCitations()}>Changer la citation</button>
      </div>
    );
  }
}

export default App;
