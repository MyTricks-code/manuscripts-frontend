import React from 'react'
import Company from '../components/Company'
import Seo from '../components/Seo'

const company = ({post, meta, category}) => {
  const seo = {
    attributes : {
        title : "Company",
        metaDescription : "Manuscripts, read blogs or browse categories of manuscripts. Get useful and quality content for cbse,  Cbse, Artificial Intelligence, Science, Mathematics, Case studies and much more!"
    }
}
  return (
    <div>
      <Seo item = {seo}/>
      <Company post={post} category={category} meta={meta} key={Math.random()}/>
    </div>
  )
}


export default company

export async function getStaticProps(){
  let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
  }
  let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&sort=id:DESC&pagination[start]=0&pagination[limit]=3`, {headers:headers})
  let post = await url.json()
  let categoryUrl = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`, {headers:headers})
  let category = await categoryUrl.json()
  // console.log(post)
  return {
    props: {
      post: post.data,
      meta :  post.meta.pagination,
      category : category.data,
    },
    revalidate: 1
  }
}