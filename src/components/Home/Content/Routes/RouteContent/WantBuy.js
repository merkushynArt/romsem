import React, { useContext } from 'react'
import { CustomContext } from '../../../../../Context';

const WantBuy = ({item}) => {
   const {addItem} = useContext(CustomContext)

   return (
      <button className='content__card-btn' type='button' onClick={() => addItem(item)} >Хочу</button>
   )
}

export default WantBuy


