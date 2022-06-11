import React from 'react'
import Link from "next/link"

const FeaturedPost = ({item}) => {
  return (
    <div className='bg-white shadow-lg my-3 mx-1 lg:mx-3 py-3'>
    <h2 className='text-4xl font-bold text-center mb-3 border-gray-500'>Featured</h2> 
    {
    item.map((posts)=>{
        // console.log(item)
        return (
        posts.attributes.featured == true? <p className='text-lg font-semibold hover:no-underline border-2 my-2 hover:shadow-md rounded px-2 mx-2'> <Link href={`/article/${posts.attributes.slug}`}>{posts.attributes.title }</Link></p> : null
        )
    })    
    }</div>
  )
}

export default FeaturedPost