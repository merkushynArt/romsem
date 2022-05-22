import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Logo from '../../../../assets/icons/pizza.svg';

function Pizza() {
   const [arr, setArr] = useState([]);

   useEffect(()=> {
      axios('http://localhost:8080/pizza')
         .then(({data}) => setArr(data))
   }, []);
   
   

   return (
      <>
         <div className='content__header'>
            <div className='content__header-left'>
               <img className='content__header-img' src={Logo} alt="pizza-logo" />
               <h3 className='content__header-title'>Пицца</h3>
            </div>
            <div className='content__header-sort'>
               <p className='content__header-sort-title'>Сортировка</p>
               <p className='content__header-sort-default'>По умолчанию <span>︾</span></p>
            </div>
         </div>

         <div className="content__row">
            {arr.map((item) => (
               <div key={item.id} className='content__card'>
                  <img className='content__card-img' src={item.imageUrl} alt="" />
                  <h4 className='content__card-title'>{item.title}</h4>
                  <ul className='content__card-sizes'>
                     {item.sizes.map((size) => (
                        <li className='content__card-size' key={size}>{size}</li>
                     ))}
                  </ul>
                  <div className='content__card-bot'>
                     <p className='content__card-price'>{item.price} грн</p>
                     <button className='content__card-btn' type='button'>Хочу</button>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}

export default Pizza