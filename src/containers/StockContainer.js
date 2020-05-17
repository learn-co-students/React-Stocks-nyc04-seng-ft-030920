import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let stockArray = this.props.stocks.map(stock => <Stock transact={this.props.handleStockBuy} key={stock.id} stock={stock}/>)
    return (
      <div>
        <h2>Stocks</h2>
        {stockArray}
      </div>
    );
  }

}

export default StockContainer;
