import React from 'react';
import RouteContent from './RouteContent/RouteContent';
import Logo from '../../../../assets/icons/wok.svg'

function Wok() {
   return (
      <RouteContent Logo={Logo} title={'Wok'} path='wok' />
   )
}

export default Wok