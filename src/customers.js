import React from 'react';

const Customers = ({ customers, deleteACustomer })=> {
  return (
    <ul>
      {
        customers.map( customer => {
          return (<li key={ customer.id }>
            { customer.name }
            </li>)
        })
      }
    </ul>
  );
};

export default Customers;