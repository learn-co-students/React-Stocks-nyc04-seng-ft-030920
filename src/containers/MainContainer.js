import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolioStocks: [],
    sort: "Alphabetically", 
    filter: "None"
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(r => r.json())
      .then(newStocks => this.setState({stocks: newStocks}))
  }

  handleStockBuy = (evt) => {
    let newId = parseInt(evt.target.id, 10)
    let newStock = this.state.stocks.find(stock => stock.id === newId)
    if (!this.state.portfolioStocks.includes(newStock)) {
      let newPort = [...this.state.portfolioStocks, newStock]
      this.setState({portfolioStocks: newPort})
    }
  }

  handleStockSell = (evt) => {
    let sellId = parseInt(evt.target.id, 10)
    let sellStockId = this.state.portfolioStocks.findIndex(stock => stock.id === sellId)
    let newPort = [...this.state.portfolioStocks]
    newPort.splice(sellStockId, 1)
    this.setState({portfolioStocks: newPort})
  }

  toggleSort = (evt) => {
    let toggle = evt.target.value
    this.setState({sort: toggle})
  }

  handleFilterState = (evt) => {
    let {name, value} = evt.target
    this.setState({[name]: value})
  }

  filterStocks = (stocks) => {
    let useFilter = this.state.filter
    if (useFilter === "None") {
      return stocks
    } else {
      return stocks.filter(stock => {return stock.type === useFilter})
    }
  }

  sortStocks = () => {
    if (this.state.sort === "Price") {
      return [...this.state.stocks].sort((stockA, stockB) => {return stockA.name.localeCompare(stockB.price)})
    } else {
      return [...this.state.stocks].sort((stockA, stockB) => {return stockB.price - stockA.price})
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          sort={this.state.sort}
          filter={this.state.filter}
          handleFilter={this.handleFilterState}
          toggleSort={this.toggleSort}
        />
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.filterStocks(this.sortStocks())} handleStockBuy={this.handleStockBuy}/>
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.portfolioStocks} handleStockSell={this.handleStockSell}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
