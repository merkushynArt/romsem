import React from 'react';
import './home.css';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import Cart from './Cart/Cart';


function Home() {
   return (
      <section className='home'>
         <SideBar/>
         <Content/>
         <Cart/>
      </section>
   )
}

export default Home