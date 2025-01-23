import React from 'react'

export default function AddToBagChild({bPro}) {

  const base64String = `data:image/jpeg;base64,${bPro.image}`;

  return (
    <>
      <img className='w-[98%]' src={base64String} alt='Base64 representation'/>
    </>
  )
}
