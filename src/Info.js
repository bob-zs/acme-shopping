import React from 'react';
import { connect } from 'react-redux';

const Info = ({ auth })=> {

  return (
    <div>
    <div>
    <h1>
    {auth.username}
    </h1>
     <p>{auth.imageUrl}</p>
    <p>
    Email:{auth.email}
    </p>
    <p>
    Address:{auth.address}
    </p>
    </div>
    <ul>
    {
      (auth.orderId||[]).map( orderValue => {
        return (
          <li key={ orderValue.id }>
            Order NO. { orderValue.id }
          </li>
            )
      })
    }
    </ul>
    </div>
  );
};

export default connect(state => state)(Info);
