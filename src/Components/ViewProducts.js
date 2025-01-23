import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ViewProductsChild from './ViewProductsChild';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function ViewProducts() {
  const [viPro, setViPro] = useState([]);

  const recieveProducts = () => {    
    axios.get('http://localhost:4000/view')
    .then((res) => res.data)
    .then((finalRes) => {
      setViPro(finalRes);
    }).catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    recieveProducts();    
  }, []);

  const pView = viPro.map((product, index) => {
    return(
      <ViewProductsChild key={index} viewData={product}/>
    );
  });


  return (
    <>
      <Navbar/>
      <Link to='/add-to-bag'>
        <div className='grid grid-cols-6 gap-6 mt-[100px]'>
          {pView}
        </div>
      </Link>
    </>
  )
}

