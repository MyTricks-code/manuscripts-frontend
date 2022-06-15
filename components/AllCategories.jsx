import React from 'react'
import Link from 'next/link'

const AllCategories = ({category}) => {
    console.log(category)
  return (
    <div className='mt-8 flex-1 grid align-between grid-cols-1 lg:grid-cols-3 mx-6 mb-6'>
        {
          category.map((item)=>{
            return(
            <Link href={`/category/${item.attributes.slug}`}>
            <div className='bg-neutral-50 dark:bg-gray-700 shadow-lg rounded px-2 md:px-6 my-6 py-6 mx-6 hover:cursor-pointer'>
                <h3 className='text-center font-bold text-2xl dark:text-white'>{item.attributes.name}</h3>
                <p className='text-lg font-bold text-neutral-800 mt-2 px-2 text-center dark:text-gray-50'>{item.attributes.metaDescription}</p>
                <div className="text-center mt-6">
                <Link href={`/category/${item.attributes.slug}`}><a href="#" className='rounded px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-800'>View Blog(s)</a></Link>
                </div>
             </div>
            </Link>
            )
          })
        }
      </div>
  )
}

export default AllCategories