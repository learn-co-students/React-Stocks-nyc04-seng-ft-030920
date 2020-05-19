import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let arrayOfStocks = this.props.stocks.map((singleStock) => {
      return <Stock 
        key={singleStock.id}
        stock={singleStock}
        addPortfolio={this.props.addPortfolio}
        />
    })
    // console.log(this.props.stocks)

    return (
      <div>
        <h2>Stocks</h2>
        {
          arrayOfStocks
        }
      </div>
    );
  }

}

export default StockContainer;
