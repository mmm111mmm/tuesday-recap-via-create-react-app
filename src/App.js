import React from 'react';
import './App.css';

class Dog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hungry: "yes",
        }
        this.feed = this.feed.bind(this)
    }
    feed() {
        this.setState({
            hungry: "no"
        })
    }
    render() {
        return (
            <div>Woof, woof: 
                {this.props.name} 
                <br />
                Colour: {this.props.colour}
                <br />
                Hungry: {this.state.hungry}
                <br />
                  <button onClick={this.feed}>Feed</button>
                <hr />
            </div>                
        );
    }
}

class Playtime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            treats: []
        }
    }
    giveTreat = (treat) => {
        this.state.treats.push(treat)
        this.setState({
            treats: this.state.treats
        })
    }
    render() {
        var treats = this.state.treats.map(function(item, i) {
            return <li key={item+i}>{item}</li>
        })
        return (
            <div>
                <ul>
                    {treats}
                </ul>
                <button onClick={() => this.giveTreat("stroke")}>
                    stroke lovingly
                </button>
                <button onClick={() => this.giveTreat("ball")}>
                    play ball
                </button>
                <button onClick={() => this.giveTreat("orange")}>
                    give orange
                </button>
                { this.state.treats[this.state.treats.length-1] === "orange" 
                  ?  <h1>ORANGES!!!!</h1>
                  : <div></div>
                }
            </div>
        );
    }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <h3>Dogs</h3>
          <Dog name="Kira" colour="brown and white"/>
          <Dog name="Tess" colour="grey" />
          <h3>Play with dogs!</h3>
          <Playtime />
      </div>
    );
  }
}

export default App;
