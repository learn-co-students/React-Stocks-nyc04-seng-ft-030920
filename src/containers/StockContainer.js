import React, { Component } from 'react';
import Stock from '../components/Stock'

function StockContainer(props){
    return (
      <div>
        <h2>Stocks</h2>
        {
          props.stocks.map(stock => {
            return < Stock stock={stock} handleClick={props.addToPortfolio}/>
          })
        }
      </div>
    );

}

export default StockContainer;
