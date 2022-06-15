import React from 'react'
import AllCategories from '../components/AllCategories'
import Seo from '../components/Seo'

const category = ({category}) => {
    const seo = {
        attributes : {
            title : "Category"
        }
    }
  return (
    <div>
        <Seo item={seo}/>
        <div className='mt-16'
    >
        <h1 className='text-center pt-6 font-bold text-gray-700 text-4xl lg:text-6xl dark:text-white'>CATEGORIES</h1>
        <p className='text-center mx-6 font-semibold text-lg lg:text-xl -mt-4 50 rounded-lg dark:text-white p-2'>Browse Blogs by Categories!</p>
        <div className="flex shadow-sm bg-neutral-50 dark:bg-gray-700 mt-6">
        <AllCategories category={category}/>
        </div>
        </div>
    </div>
  )
}

export default category

export async function getStaticProps({}) {
    let headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
    let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`, {headers:headers})
    let post = await url.json()
    return {
      props: {
        category : post.data,
        // posts : post.data[0].attributes.posts.data,
        revalidate: 1,
        // meta : post.data[0].meta.pagination
      }
    }
}

// export async function getStaticPaths(){
//   let headers = {
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
//   }
//   let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`, {headers:headers})
//   let res = await url.json()
//   return {
//     paths : res.data.map(post=> ({
//       params : {slug: String(post.attributes.slug)},
//     })),
//     fallback : false
//   }

// }