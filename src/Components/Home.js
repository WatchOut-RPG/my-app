import Navbar from './Navbar'
import Advert from './Advert'
import Products from './Products';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home() {
  const [finalProducts, setFinalProduct] = useState([]);  
  
  const getProduct= () => {    
    axios.get('http://localhost:4000/home')
    .then((res) => res.data)
    .then((finalRes) => {
      setFinalProduct(finalRes);
    }).catch(error => console.error('Error:', error));        
  }  

  useEffect(() => {
    getProduct();    
  }, []);

  let pItems = finalProducts.map((products, index) => {
    return(
      <Products key={index} pdata = {products}/>
    );    
  });  
  

  return (
    <>
      <Navbar/>
      <Advert/>
      <h1 className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-5xl dark:text-[#413A36] flex justify-center font-Roboto'>Shop by Category</h1>
      <Link to='view-products'>
        <div className='grid grid-cols-6 gap-1 size-[85%] place-self-centersize-[80%] place-self-center'>
          {pItems}
        </div>
        <div className='grid grid-cols-6 gap-1 size-[85%] place-self-center'>
          {pItems}
        </div>
        <div className='grid grid-cols-6 gap-1 size-[85%] place-self-center'>
          {pItems}
        </div>
        <div className='grid grid-cols-6 gap-1 size-[85%] place-self-center'>
          {pItems}
        </div>
        <div className='grid grid-cols-6 gap-1 size-[85%] place-self-center'>
          {pItems}
        </div>        
      </Link>           
    </>
  )
}
