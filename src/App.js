import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Chart from './components/Chart/Chart.jsx';
import CountryPicker from './components/CountryPicker/CountryPicker.jsx';
import {fetchData } from './api';
class App extends Component {
  state={
    data:{}
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }
  render(){
    return (
      <div className="container">
        <Cards data={this.state.data}/>
        <CountryPicker/>
        <Chart/>
      </div>
    );
  }
}

export default App;
