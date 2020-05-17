import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stockArray = this.props.stocks.map(stock => <Stock transact={this.props.handleStockSell} key={stock.id} stock={stock}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
        {stockArray}
      </div>
    );
  }

}

export default PortfolioContainer;
