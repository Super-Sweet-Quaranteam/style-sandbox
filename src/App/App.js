import React, {Component} from 'react';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';

import graph1 from '../images/graph1.png';
import graph2 from '../images/graph2.png';




class App extends Component{
  state = {
    mode: 'admin',
    buttonText: 'go to subscriber view'
  }

  switchMode=()=>{
    if (this.state.mode==='admin'){
      this.setState({mode: 'user', buttonText: 'go to admin view'})
    }
    else {this.setState({mode: 'admin', buttonText: 'go to subscriber view'})}
  }

  render(){
    return (
      <div className="App">
        <button className="mode-button" onClick={this.switchMode}>{this.state.buttonText}</button>
        {this.state.mode==='admin' 
        ?
        <div className="admin-view">
          <Sidebar mode={this.state.mode}/>
          <Dashboard />
        </div>
        :
        <div className="admin-view">
          <Sidebar mode={this.state.mode} />
          <img src={graph1} alt="risk chart" className="risk-chart"/>
          <img src={graph2} alt="risk chart" className="risk-chart" />
          <p>there isn't anything here yet</p>
        </div>
        }
      </div>
    );
  }
}

export default App;
