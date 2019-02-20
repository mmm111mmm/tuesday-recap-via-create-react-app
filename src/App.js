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
            hungry: "no",
            freeformTreat: ""
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
            treats: [],
            freeformTreat: "",
            currentTreatFromSelect: ""
        }
    }

    selectChangeCurrentTreat = (e) => {
        if(e.target.value==="") return
        this.state.treats.push(e.target.value)
        this.setState({
            treats: this.state.treats
        })           
    }

    selectSubmitTreat = (e) => {
        this.state.treats.push(this.state.currentTreatFromSelect)
        this.setState({
            treats: this.state.treats
        })        
    }

    inputChangeCurrentTreat = (e) => {
        this.setState({
            freeformTreat: e.target.value
        })
    }

    inputSubmitTreat = (e) => {
        this.state.treats.push(this.state.freeformTreat)
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
                <select value={this.state.treatFromSelect} onChange={this.selectChangeCurrentTreat}>
                    <option value="">==Choose treat==</option>
                    <option value="stroke">Stroke lovingly</option>
                    <option value="ball">Play ball</option>
                    <option value="orange">Give orange</option>
                </select>  
                <br />
                <br />
                <input name="freeformTreat" value={this.state.freeformTreat} onChange={this.inputChangeCurrentTreat}/>
                <button onClick={this.inputSubmitTreat}>give</button>
                <br />
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
          <Dog name="Tess" colour="gray" />
          <h3>Play with dogs!</h3>
          <Playtime />
      </div>
    );
  }
}

export default App;
