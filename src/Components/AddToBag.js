import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import AddToBagChild from './AddToBagChild';

export default function AddToBag() {
  const [bagProducts, setBagProducts] = useState([]);
  // const [sizeBtnBorColor, setSizeBtnColor] = useState(false);

  const getBagProducts = () => {
    axios.get('http://localhost:4000/add-to-bag')
    .then((res) => res.data)
    .then((finalRes) => {
      setBagProducts(finalRes);
    });
  }

  useEffect(() => {
    getBagProducts();
  }, []);

  const bagPro = bagProducts.map((product, index) => {
    return(
      <AddToBagChild key={index} bPro = {product}/>
    )
  });

  // const sizeBtnBorColorChange = () => {
  //   if(sizeBtnBorColor===true) {
      
  //   }
  // }


  return (
    <>
      <Navbar/>
      <div className='flex justify-between mt-[100px]'>
        <div className='pl-6 grid grid-cols-2 gap-1 w-[58%] place-items-center'>
          {bagPro}          
        </div>
        <div className='w-[40%]'>
          <div>
            <div className='font-bold text-2xl'>Campus Sutra</div>
            <div className='text-[#7D808B] text-lg'>Classic Self Design Spread Collar Casual Shirt</div>
            <button className='border-[#D4D5E0] border-[1px] px-2 py-0.5 my-3 hover:border-black'>
              <div className='flex flex-row items-center'>
                <div className='font-bold text-sm'>4.4</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-4 mx-1 fill-[#14958F]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <div className='text-[#D4D5E0] text-sm mb-1'>|</div>
                <div className='text-[#7D808B] ml-1 text-sm'>11.8k Ratings</div>
              </div>
            </button>
            <hr/>
            <div className='flex flex-row py-2'>
              <div className='text-2xl font-bold'>&#8377; 599</div>
              <div className='text-xl font-bold text-[#FF905A] pl-2 pt-0.5'>(40% OFF)</div>
            </div>
            <div className='text-sm text-[#1BA685] font-bold'>inclusive of all taxes</div>
            <div className='font-bold mt-3 text-sm'>MORE COLORS</div>            
            <div className='grid grid-cols-9 mt-3 cursor-pointer'>
              {bagPro}              
            </div>
            <div className='font-bold my-4 text-sm'>SELECT SIZE</div>
            <div className='flex flex-row gap-2'>
              <button className='border-[1px] border-[#D4D5E0] p-3 rounded-full font-bold cursor-pointer hover:border-[#FF527B]'>38</button>
              <button className='border-[1px] border-[#D4D5E0] p-3 rounded-full font-bold cursor-pointer hover:border-[#FF527B]'>40</button>
              <button className='border-[1px] border-[#D4D5E0] p-3 rounded-full font-bold cursor-pointer hover:border-[#FF527B]'>42</button>
              <button className='border-[1px] border-[#D4D5E0] p-3 rounded-full font-bold cursor-pointer hover:border-[#FF527B]'>44</button>
            </div>
            <button className='bg-[#FF527B] text-white w-[50%] h-[55px] my-8 rounded-md'>
              <div className='flex flex-row justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
                <div className='mx-2 font-bold'>ADD TO BAG</div>
              </div>
            </button>
            <hr/>
            <div className='my-8'>
              <p className='my-2'>100% Original Products</p>
              <p className='my-2'>Pay on delivery might be available</p>
              <p className='my-2'>Easy 14 days returns and exchanges</p>
            </div>
          </div>
          <div className='flex items-center mb-3'>
            <div className='font-bold'>BEST OFFERS</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>
          </div>          
          <div className='flex'>
            <div className='font-semibold mr-1'>Best Price:</div>
            <div className='font-bold text-[#FF905A]'>Rs. 499</div>
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Applicable on: Orders above Rs. 900 (only on first purchase)</li>
            <li className='my-1'>Coupon code: <strong>MYNTRA300</strong></li>
            <li className='my-1'>Coupon Discount: 30% off (Your total saving: Rs. 1408)</li>
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>View Eligible Products</div> 
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>10% Discount on BOBCARD Credit Cards and Credit Card EMI.</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Min Spend ₹3500, Max Discount ₹1000.</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>Terms & Condition</div> 
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>10% Discount on RBL Bank Credit Cards and Credit Card EMI.</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Min Spend ₹3500, Max Discount ₹1000.</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>Terms & Condition</div>
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>10% Discount on HDFC Bank Credit Card EMI.</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Min Spend ₹3500, Max Discount ₹1000.</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>Terms & Condition</div> 
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>10% Discount on Kotak Credit and Debit Cards.</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Min Spend ₹3500, Max Discount ₹1000.</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>Terms & Condition</div>  
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>10% Discount on HSBC Credit Cards.</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Min Spend ₹3500, Max Discount ₹1000.</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>Terms & Condition</div>
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>10% Discount on IDFC First Bank Credit Card EMI.</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Min Spend ₹3500, Max Discount ₹1000.</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>Terms & Condition</div>  
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>7.5% Discount on Myntra Kotak Credit Card.</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>Min Spend ₹3500, Max Discount ₹1000.</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>Terms & Condition</div> 
          <div className='flex mt-2'>
            <div className='font-semibold mr-1'>EMI option available</div>            
          </div>
          <ul className='text-sm' style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li className='my-1'>EMI starting from Rs.33/month</li>            
          </ul>
          <div className='text-sm text-[#FF527B] font-bold mt-2 mb-3'>View Plan</div>  
        </div>        
      </div>
    </>
  )
}
