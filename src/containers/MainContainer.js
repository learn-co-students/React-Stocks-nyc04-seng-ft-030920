import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolioStocks: [],
    sortTerm: "",
    filterTerm: "Tech"
  }

  handleSortTerm = (choiceFromChild) => {
    this.setState({
      sortTerm: choiceFromChild
    })
  }


  handleFilterTerm = (choiceFromChild) => {
    this.setState({
      filterTerm: choiceFromChild
    })
  }

  arrayToRender = () => {
    let manipulatedArrayOfStocks = [...this.state.allStocks]
    // filter the stocks
    if (this.state.filterTerm === "All") {
      manipulatedArrayOfStocks = [...this.state.allStocks]
    } else {
      manipulatedArrayOfStocks = this.state.allStocks.filter(stock => stock.type === this.state.filterTerm)
    }

    // sort the stocks
    if (this.state.sortTerm === "Alphabetically") {
      manipulatedArrayOfStocks.sort((stockA, stockB) => {
        return stockA.name.localeCompare(stockB.name)
      })
    } else if (this.state.sortTerm === "Price") {
      manipulatedArrayOfStocks.sort((stockA, stockB) => {
        return stockA.price - stockB.price
      })
    }
    return manipulatedArrayOfStocks
  }

  
  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
      .then(response => response.json())
      .then((fetchedStocks) => {
        this.setState({
          allStocks: fetchedStocks
        })
      })
  }

  addPortfolio = (stock) => {
    console.log(stock)
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock)
    })
  }
  

  render() {
    // console.log(this.props.stocks)
    let stocks = this.arrayToRender()
    console.log(this.state.sortTerm)

    return (
      <div>
        <SearchBar 
          sortTerm={this.state.sortTerm}
          filterTerm={this.state.filterTerm}
          handleFilterTerm={this.handleFilterTerm}
          handleSortTerm={this.handleSortTerm}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocks={stocks}
                addPortfolio={this.addPortfolio} />

            </div>
            <div className="col-4">

            <PortfolioContainer stocks={this.state.portfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
