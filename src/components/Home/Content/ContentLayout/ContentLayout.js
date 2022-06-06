import React from 'react';
import { Outlet } from 'react-router-dom';
import More from '../More/More';


const ContentLayout = () => {
   return (
      <>
         <Outlet/>
         <More/>
      </>
   )
}

export default ContentLayout