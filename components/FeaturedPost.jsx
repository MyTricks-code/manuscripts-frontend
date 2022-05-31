import React from 'react'
import Link from "next/link"

const FeaturedPost = ({item}) => {
  return (
    <div>
    <h2 className='text-4xl font-bold text-center mb-3'>Featured</h2> 
    {
    item.map((posts)=>{
        // console.log(item)
        return (
        posts.attributes.featured == true? <p className='text-lg font-semibold hover:no-underline hover:shadow-md rounded mx-2'> <Link href={`/posts/${posts.attributes.slug}`}>{posts.attributes.title }</Link></p> : null
        )
    })    
    }</div>
  )
}

export default FeaturedPost