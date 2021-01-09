import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Chart from './components/Chart/Chart.jsx';
import CountryPicker from './components/CountryPicker/CountryPicker.jsx';
import {fetchData } from './api';
class App extends Component {
  state={
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }
  handleCountryChange= async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country: country});
  }
  render(){
    return (
      <div className="container">
        <h1 className="heading">Covid19 Tracker</h1>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
