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

export async function getServerSideProps(context) {
    let headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
    let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[slug]=` + context.query.slug + "&populate=*" , {headers:headers})

    let postUrl = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?&populate=*&sort=id:DESC`, { headers: headers})

    let categoryUrl = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=*&sort=id:DESC&pagination[start]=0&pagination[limit]=8`, { headers: headers}) 

    let post = await url.json()
    let postUrlData = await postUrl.json()
    let categoryUrlData = await categoryUrl.json()
    console.log(categoryUrlData)
    
    return {
      props: {
        post : post.data[0],
        morePost : postUrlData.data,
        categoryPost : categoryUrlData.data
      }
    }
}