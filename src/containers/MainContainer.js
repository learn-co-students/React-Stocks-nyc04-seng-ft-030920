import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'


const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: 'all',
    sort: 'none'
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  addToPortfolio = (stock) => {
    console.log('hit')
    this.setState(prevState => {
      const arrayWithNew = [...prevState.portfolio, stock]
      const arrayWithNoDups = arrayWithNew.filter((singleStock, index) => arrayWithNew.indexOf(singleStock) === index)
      return {
      portfolio: arrayWithNoDups
    }})
  }

  removeFromPortfolio = (stock) => {
    this.setState(prevState => {
      return {
        portfolio: prevState.portfolio.filter(singleStock => singleStock !== stock)
      }
    })
  }

  updateFilter = (filterType) => {
    this.setState({filter: filterType})
  }

  updateSort = (sortType) => {
    this.setState({sort: sortType})
  }

  calculateDisplayStocks = () => {
    let filteredStocks = this.state.stocks
    if(this.state.filter !== 'all'){
      filteredStocks = filteredStocks.filter(stock => stock.type === this.state.filter)
    }

    switch(this.state.sort){
      case "alphabetically":
        return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      case "price":
        return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }

  render() {
    const stocks = this.calculateDisplayStocks()
    return (
      <div>
        <SearchBar filter={this.state.filter} sort={this.state.sort} updateFilter={this.updateFilter} updateSort={this.updateSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} addToPortfolio={(stock) => this.addToPortfolio(stock)}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={(stock) => this.removeFromPortfolio(stock)}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
