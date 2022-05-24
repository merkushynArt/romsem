import React, {useEffect, useState} from 'react';
import axios from 'axios';

function RouteContent({Logo, title, path}) {
   const [arr, setArr] = useState([]);

   useEffect(()=> {
      axios(`http://localhost:8080/${path}`)
         .then(({data}) => setArr(data))
   }, []);

   return (
      <div>
         <div className='content__header'>
            <div className='content__header-left'>
               <img className='content__header-img' src={Logo} alt={title} />
               <h3 className='content__header-title'>{title}</h3>
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
                  {path === 'pizza' ?
                     <ul className='content__card-sizes'>
                     {item.sizes.map((size) => (
                        <li className='content__card-size' key={size}>{size}</li>
                     ))}
                     </ul>
                     : path === 'rolls' || path === 'wok' || path === 'sushi' || path === 'salad' || path === 'soup' || path === 'corndog' ?
                     <p className='content__card-option'>
                        {item.ingredients.filter((item, idx) => idx < 3).join(', ')}
                     </p>
                     : path === 'sets' ?
                     <p className='content__card-option'>
                        1000 грамм, {item.count} штук
                     </p>
                     : ''
                  }
                  <div className='content__card-bot'>
                     <p className='content__card-price'>{item.price} грн</p>
                     <button className='content__card-btn' type='button'>Хочу</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default RouteContent