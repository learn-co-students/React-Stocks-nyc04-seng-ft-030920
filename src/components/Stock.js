import React from 'react'

const Stock = (props) => {

  let {name, ticker, price} = props.stock
  
  return(
    <div>

      <div className="card" onClick={() => props.addPortfolio ? props.addPortfolio(props.stock) : props.removeStock(props.stock)}>
        <div className="card-body">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  )
};

export default Stock
