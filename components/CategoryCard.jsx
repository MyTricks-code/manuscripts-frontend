import React from 'react'
import Link from "next/link"
import Seo from './Seo'

const CategoryCard = ({item, category}) => {
  const seo= {"attributes" : {
    title : category.attributes.name
  }}
  return (
    <div>
      <Seo item={seo}/>
      <Link  href={`/article/${item.attributes.slug}`}>
    <section>
    
    <div className="md:pb-12 m-4 relative overflow-hidden p-1 mb-2 rounded shadow-lg bg-neutral-100 dark:bg-gray-700" key={item.attributes.slug}>  
    <div className="rounded-lg lg:p-2 lg:pb-6 m-2" key={item.attributes.slug}>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{category.attributes.name}</h3>
      <h2 className="text-lg text-gray-900 font-medium title-font text-center mb-4 dark:text-gray-50">{item.attributes.title}</h2>
      {/* <div className="flex align-center justify-center mb-2 lg:mb-4">
        <span className="mr-3">Color</span>
        <button className={"border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-600`}></button>
      </div> */}
      <p className="leading-relaxed text-center text-base dark:text-gray-50">{item.attributes.description}</p>
    </div>
    <div className="text-center">
    <Link key={item.attributes.slug} href={`/article/${item.attributes.slug}`}><button className='btn text-center rounded-md bg-cyan-600 hover:bg-blue-600 text-white p-2 mb-3 md:p-3' item={item}>Read More!</button></Link>
    </div>
    </div>
    </section>
    </Link>

    </div>
  )
}

export default CategoryCard