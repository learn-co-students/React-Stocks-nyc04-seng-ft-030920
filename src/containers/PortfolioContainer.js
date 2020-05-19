import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let arrayOfPortfolioStocks = this.props.stocks.map((singleStock) => {
      return <Stock 
        key={singleStock.id}
        stock={singleStock}
        removeStock={this.props.removeStock}
      />
    })

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            arrayOfPortfolioStocks
          }
      </div>
    );
  }

}

export default PortfolioContainer;
