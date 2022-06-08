import React, { useContext, useState } from 'react'
import { CustomContext } from '../../../../Context';
import PizzaSize from '../Routes/RouteContent/PizzaSize'
import Price from '../Routes/RouteContent/Price';
import WantBuy from '../Routes/RouteContent/WantBuy'

const ProductContent = ({item}) => {
   const {minusOne, plusOne, cart} = useContext(CustomContext);
   const [pizza, setPizza] = useState({size: 0});

   return (
      <div className="product__content">
         <img className='product__content-img' src={item.imageUrl} alt={item.title} />
         <div className='product__content-info'>
            <h2 className="product__content-title">{item.title}</h2>
            <PizzaSize item={pizza.categories === 'pizza' ? pizza : item} setPizza={setPizza} />
            <div className="product__content-buy">
               <Price price={
               pizza.categories === 'pizza' && pizza.size === 1 ? item.priceMiddle 
               : pizza.categories === 'pizza' && pizza.size === 2 ? item.priceLarge
               : item.price}/>
               <div className="product__content-line" onClick={() => {
                  
                  let idx = cart.findIndex((el) => {
                     if (item.categories === 'pizza'){
                        return el.title === item.title && el.size === pizza.size
                     } else {
                        return el.title === item.title
                     }
                  });
                  if(idx > -1) {
                     minusOne(pizza.categories === 'pizza' ? pizza : item)
                  } else {
                     console.log('такого нет в корзине')
                  }
               }}>
               </div>
               <div className="product__content-pay">
                  <span className='product__content-pay-count'>10</span>
                  <button className='product__content-pay-btn' onClick={() => plusOne(pizza.categories === 'pizza' ? pizza : item)} >+</button>
               </div>
            </div>
            <WantBuy item={pizza.categories === 'pizza' ? pizza : item}/>
         </div>
      </div>
   )
}

export default ProductContent