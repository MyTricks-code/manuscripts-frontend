import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'

const PostCard = ({ item }) => {
  // const mode = document.body.classList.contains("bg-slate-800")
  // if (){
  //   document.getElementById("mainDiv").classList.add("bg-gray-500")
  // }
  return (
    <div className='shadow-lg dark:bg-gray-600 bg-slate-50 rounded-md mx-3 mb-6 '>
      <Link href={`/article/${item.attributes.slug}`}>
        <section className="hover:cursor-pointer relative mb-1 dark:bg-gray-600">
          <div className="md:pb-12 relative overflow-hidden p-1 mb-2 rounded" key={item.attributes.slug}>
            <div className="rounded-lg lg:p-2 lg:pb-6 " key={item.attributes.slug}>
              <img className="h-50 w-full rounded m-auto object-cover object-center mb-1" src={item.attributes.thumbnail.data && item.attributes.thumbnail.data.attributes.url} alt={item.attributes.thumbnail.data && item.attributes.thumbnail.data.attributes.name} />
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <Moment format="MMM Do, YYYY" className='ml-2'>
                  <h3 className="tracking-widest text-indigo-500 text-xs ml-2  font-medium title-font">{item.attributes.publishedAt}</h3>
                </Moment>
              </div>

              <h2 className="text-lg dark:text-white text-gray-900 font-medium title-font text-center mb-4">{item.attributes.title}</h2>
              <div className="flex align-center justify-center mb-2 lg:mb-4">
                <div className="mr-3 text-lg dark:text-gray-200">Category</div>
                <Link href={`/category/${item.attributes.category.data.attributes.slug}`}>
                  <h3 className="tracking-widest text-indigo-500 text-lg hover:text-indigo-800 font-medium title-font">{item.attributes.category.data.attributes.name}</h3>
                </Link>
              </div>
              <p className="leading-relaxed text-center text-base dark:text-gray-100">{item.attributes.description}</p>
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

export default PostCard