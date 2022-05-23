import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/rolls.svg';

function Rolls() {
   return (
      <RouteContent Logo={Logo} title={'Роллы'} path="rolls"/>
   )
}

export default Rolls