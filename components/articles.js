import React, {useState, useEffect} from "react"
import Card from "./card"
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchAPI } from "../lib/api";

const Articles = ({ articles, metaData}) => {
  
  const [Posts, setPosts] = useState(articles)
  const getMorePost = async()=>{
    const res = await fetchAPI("/articles", { populate: "*" , sort: ['id:DESC'], pagination: {
      start: Posts.length,
      limit: 6,
    }})
    const newPost = await res.data
    setPosts(Posts => [...Posts, ...newPost])
  }

  const [hasMore, setHasMore] = useState(true)
  useEffect(()=>{
    setHasMore(metaData.total > Posts.length ? true: false)
  }, [Posts])
  
  return (
      <div>
          {/* {articles.map((articles) => { */}
          <InfiniteScroll
            dataLength={Posts.length}
            next = {getMorePost}
            hasMore = {hasMore}
            loader = {<h4 className="text-center"><img src="loading.gif" alt="loading.." width="50px" height="50px" className="text-center"/></h4>}
            endMessage = {
              <p className="text-center">Holy Moly! You have reached the End.
                <img src="/accomplish.gif" alt="accomplish" />
              </p>
            }
            className = 'mt-8 grid align-between grid-cols-1 gap-10 lg:grid-cols-2'
          >
          {Posts.map((articles) => {
            return (
            <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 m-4">
              <Card
                article={articles}
                key={`article__left__${articles.attributes.slug}`}
                />
            </div>
            )
          })}
          </InfiniteScroll>
      </div>
    
  )
}


export default Articles