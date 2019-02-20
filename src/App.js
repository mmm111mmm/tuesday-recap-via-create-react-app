import React from 'react';
import './App.css';
import { Route, Switch, NavLink} from 'react-router-dom';


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
            inputtedTreat: "",
            treatFromSelect: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectSubmitTreat = (e) => {
        this.state.treats.push(this.state.treatFromSelect)
        this.setState({
            treats: this.state.treats
        })        
    }

    inputSubmitTreat = (e) => {
        this.state.treats.push(this.state.inputtedTreat)
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

                <select name="treatFromSelect" value={this.state.treatFromSelect} onChange={this.handleInput}>
                    <option value="stroke">Stroke lovingly</option>
                    <option value="ball">Play ball</option>
                    <option value="orange">Give orange</option>
                </select>  
                <button onClick={this.selectSubmitTreat}>give</button>

                <br />
                <br />

                <input name="inputtedTreat" value={this.state.inputtedTreat} onChange={this.handleInput}/>
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

class Dogs extends React.Component {
    render() {
        return (
            <div>
                <Dog name="Kira" colour="brown and white" />
                <Dog name="Tess" colour="gray" />
            </div>
        )
    }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
            <NavLink exact to="/" activeStyle={{fontWeight: 'bold'}}>Dogs</NavLink>            
            <NavLink to="/playtime" activeStyle={{fontWeight: 'bold'}}>Playtime</NavLink>            
        </div>
        <Switch>
            <Route exact path='/' component={Dogs}/>
            <Route path='/playtime' component={Playtime}/>
        </Switch>        
      </div>
    );
  }
}

export default App;
