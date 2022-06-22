import React from 'react';

const Cupcakes = ({ cupcakes,type,deleteACupcake })=> {
  return (
    <ul>
      {
        cupcakes.map( cupcake => {
          return <li key={ cupcake.id }>{ cupcake.name } {type} <button onClick = { ()=>{deleteACupcake(cupcake)} }>x</button></li>
        })
      }
    </ul>
  );
};

export default Cupcakes;