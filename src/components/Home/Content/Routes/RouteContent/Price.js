import React from 'react';

const Price = ({price}) => {
   return (
      <div>
         <p className='content__card-price'>{price} грн</p>
      </div>
   );
};

export default Price;
