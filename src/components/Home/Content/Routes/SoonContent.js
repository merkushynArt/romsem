import React from 'react';
import Smile from '../../../../assets/Home/smail.png'

function SoonContent() {
   return (
      <>
         <h2 className='home__soon-title'>Скоро здесь будет много вкусных предложений</h2>
         <div className='home__soon-subtitle'>Дайте немного времени айтишникам</div>
         <img className='home__soon-img' src={Smile} alt="Smile-sad" />
      </>
   )
}

export default SoonContent;