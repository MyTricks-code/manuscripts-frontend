import React from 'react'
import PostDetail from '../../components/PostDetail'

const slug = ({post , morePost, categoryPost}) => {
  return (
    <div>
    <PostDetail post={post} morePost={morePost} categoryPost={categoryPost}/>
    </div>
    
  )
}

export default slug

export async function getStaticProps({params : {slug}}) {
  let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
  }
  const url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[slug]=${slug}&populate=*`, {headers: headers})
  let post = await url.json()
  
  let postUrl = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?&populate=*&sort=id:DESC`, { headers: headers})
    
  let categoryUrl = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=*&sort=id:DESC&pagination[start]=0&pagination[limit]=8`, { headers: headers}) 
  let postUrlData = await postUrl.json()
  let categoryUrlData = await categoryUrl.json()
  return{
    props : {
      post : post.data[0],
      morePost : postUrlData.data,
      categoryPost : categoryUrlData.data,
    }
  }
}

export async function getStaticPaths() {
    let headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
    let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts`, {headers:headers})
    let post = await url.json()
    
    
    return {
      paths : post.data.map(post=> ({
        params : {slug: String(post.attributes.slug)},
      })),
      fallback : false
    }
}