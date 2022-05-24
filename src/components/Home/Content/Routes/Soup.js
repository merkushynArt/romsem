import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/soup.svg';

function Soup() {
   return (
      <RouteContent Logo={Logo} title={'Супы'} path='soup'/>
   )
}

export default Soup;