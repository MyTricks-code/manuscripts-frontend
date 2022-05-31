import Head from 'next/head'
import NewsCard from '../components/NewsCard'
import PostCard from '../components/PostCard'
import React, {useState, useEffect ,useRef} from "react"
import Seo from '../components/Seo'
import FeaturedPost from '../components/FeaturedPost'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader'

export default function Home(props) {

  const [Posts, setPosts] = useState(props.post)
  
  const searchQuery = useRef(null)

  const [meta , setMeta] = useState(props.meta)
  
  const searchFunction = async()=>{
    console.log("clicked")
    let headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
    const searchUrl = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&sort=id:DESC&_q=${document.getElementById("searchBar").value}` , {
      headers : headers
    })
    const searchResult = await searchUrl.json()
    console.log(searchResult)
    setPosts(searchResult.data)
    setMeta(searchResult.meta.pagination.total)
  }

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
    <div className='flex align-middle justify-center mt-2'>
    <form className="d-flex mt-3" role="search">
      <input className="form-control me-2" type="text" placeholder="Search" id="searchBar" ref={searchQuery} aria-label="Search" />
    <button className="btn btn-outline-success" type="submit" onClick={(event)=>{searchFunction(), event.preventDefault()}}>Search</button>
    </form>
    </div>
    <InfiniteScroll
        dataLength={Posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<div className='flex align-middle justify-center mt-5'><Loader/></div>}
        endMessage={
          <p className="text-center">Holy Moly! You have reached the End.
          <img src="/images/accomplish.gif" alt="accomplish" />
        </p>
        }
        className="mt-8 grid align-between grid-cols-1 lg:grid-cols-3"
    >
        <div className="border-r-4 border-slate-400">
        <FeaturedPost item={Posts} key={Math.random()}/>
        <h1 className='text-4xl font-bold underline text-center'>News</h1>
        <NewsCard item={props.post}/>
        </div>
        
        
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


export async function getServerSideProps(context) {
  let headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
  }
  let options = {populate:"*"}
  let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&sort=id:DESC&pagination[start]=0&pagination[limit]=6`, {headers:headers})
  let post = await url.json()
  console.log(post)
  return {
    props: {
      post: post.data,
      meta :  post.meta.pagination
    }
  }
}
