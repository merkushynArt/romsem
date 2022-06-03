import React from 'react';

const PizzaSize = ({sizes}) => {
   return (
      <>
         {sizes ?
            <ul className='content__card-sizes'>
               {sizes.map((size) => (
                  <li className='content__card-size' key={size}>
                     {size}
                  </li>
               ))}
            </ul>
            : ''
         }
      </>
   );
};

export default PizzaSize;






