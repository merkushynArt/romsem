import React from 'react';
import Header from './Header';
import {Routes, Route} from 'react-router-dom';
import Pizza from './Routes/Pizza';
import Sets from './Routes/Sets';
import Wok from './Routes/Wok';
import Rolls from './Routes/Rolls';
import Sushi from './Routes/Sushi';
import Salad from './Routes/Salad';
import Soup from './Routes/Soup';
import CornDog from './Routes/CornDog';
import Drinks from './Routes/Drinks';
import Sale from './Routes/Sale';
import Main from './Routes/Main/Main';
import Product from './Product/Product';
import Reviews from './Routes/Reviews/Reviews';
import Express from './Routes/Express/Express';
import Footer from './Footer/Footer';


function Content() {
   return (
      <section className='home__content'>
         <div className="div">
            <Header/>
            <div className="container">
               <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='/pizza' element={<Pizza/>}/>
                  <Route path='/sets' element={<Sets/>}/>
                  <Route path='/wok' element={<Wok/>}/>
                  <Route path='/rolls' element={<Rolls/>}/>
                  <Route path='/sushi' element={<Sushi/>}/>
                  <Route path='/salad' element={<Salad/>}/>
                  <Route path='/soup' element={<Soup/>}/>
                  <Route path='/corndog' element={<CornDog/>}/>
                  <Route path='/drinks' element={<Drinks/>}/>
                  <Route path='/sale' element={<Sale/>}/>
                  <Route path='/:path/product/:id' element={<Product/>}/>
                  <Route path='/reviews' element={<Reviews/>}/>
                  <Route path='/express' element={<Express/>}/>
               </Routes>
            </div>
         </div>
         <Footer/>
      </section>
   )
}

export default Content