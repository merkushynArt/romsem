import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/drinks.svg';

function Drinks() {
   return (
      <RouteContent Logo={Logo} title={'Напитки'} path='drinks' />
   )
}

export default Drinks