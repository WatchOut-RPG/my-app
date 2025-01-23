import React from 'react'

export default function Products({pdata}) {
  const base64String = `data:image/jpeg;base64,${pdata.image}`;
  return (
    <>      
      <div>
        <div className='h-[100%]'>
          {/* <div className='text-center'>             */}
            <img src={base64String} alt='Base64 representation'/>
            {/* <h4 className=' text-xl truncate'>{pdata.title}</h4>                  */}
            {/* <div className='text-2xl font-bold mt-2'>UP TO {pdata.discountPercentage}% OFF</div> */}
          {/* </div>           */}
        </div>
      </div>
    </>
  )
}
