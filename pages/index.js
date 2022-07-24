import Head from 'next/head'
import NewsCard from '../components/NewsCard'
import PostCard from '../components/PostCard'
import React, {useState, useEffect ,useRef} from "react"
import Seo from '../components/Seo'
import FeaturedPost from '../components/FeaturedPost'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader'
import { useRouter } from 'next/router'


export default function Home(props) {

  const router = useRouter()
  const [Posts, setPosts] = useState(props.post)
  const [meta , setMeta] = useState(props.meta)
  
  const item= {"attributes" : {
    title : "Home"
  }}

  // get more post --infinite scroll
  const getMorePost = async()=>{
    let headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&sort=id:DESC&pagination[start]=${Posts.length}&pagination[limit]=12`, {headers:headers})
    const newPosts = await res.json()
    setPosts([...Posts, ...newPosts.data])
  }

  // hasMore --infinite-scroll
  const [hasMore, setHasMore] = useState(true)
  useEffect(()=>{
    setHasMore(meta.total > Posts.length ? true: false)
  }, [Posts])

  return (
    <>
    <Seo item={item}/>
    
    <div className="flex align-middle justify-center"></div>
    <div id="other-item-cards" className="border-r-4 mt-16  border-b-slate-400 lg:border-slate-400">
        <FeaturedPost  item={Posts} key={Math.random()}/>
        {/* <h1 className='text-4xl font-bold underline text-center'>News</h1> */}
        {/* <NewsCard item={props.post}/> */}
    </div>
    <InfiniteScroll
        dataLength={Posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<div className='flex align-middle justify-center mt-5'><Loader/></div>}
        endMessage={
          <p className="text-center font-bold px-2 m-2">Holy Moly! You have reached the End.
          <img src="/images/accomplish.gif" alt="accomplish" />
        </p>
        }
        className="mt-8 flex-1 grid align-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
        
        
        {
          meta == 0 ? <p className='text-center'>
            No Data found
          </p> : Posts.map((item)=>{
            return (
            <>
            <PostCard item={item} key={item.attributes.slug}/>
            </>
           )
          })
        }
      </InfiniteScroll>
      
    </>
  )
}



export async function getStaticProps(){
  let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
  }
  let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&sort=id:DESC&pagination[start]=0&pagination[limit]=6`, {headers:headers})
  let post = await url.json()
  console.log(post)
  return {
    props: {
      post: post.data,
      meta :  post.meta.pagination
    },
    revalidate: 1
  }
}

