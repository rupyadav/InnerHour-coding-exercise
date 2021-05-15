import React from 'react'

 const Card = ({children}) => {
    return (
        <div className="col-md-5 col-sm-12">
        <div className="card">
          <div className="card-body">
              {children}
          </div>
        </div>
      </div>
    )
}
export default Card;
