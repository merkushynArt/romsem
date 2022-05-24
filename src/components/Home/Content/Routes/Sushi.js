import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/sushi.svg';

function Sushi() {
   return (
      <RouteContent Logo={Logo} title={'Суши'} path="sushi"/>
   )
}

export default Sushi