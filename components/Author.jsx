import React from 'react'
import Image from 'next/image'


function Author({author}) {
  return (
    <div className='text-center mt-20 mb-4 p-8 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-10'>
        <Image 
          alt={author.name}
          unoptimized
          height='80px'
          width='70px'
          className='align-middle rounded-full'
          src={author.photo.url}/>
          
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-md'>{author.bio}</p>
    </div>
  )
}

export default Author