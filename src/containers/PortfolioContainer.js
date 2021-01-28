import React, { Component } from 'react';
import Stock from '../components/Stock'

function PortfolioContainer(props) {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            props.portfolio.map(stock => {
              return < Stock stock={stock} handleClick={props.removeFromPortfolio}/>
            })
          }
      </div>
    );

}

export default PortfolioContainer;
