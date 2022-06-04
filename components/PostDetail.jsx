import React from 'react'
import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link'
import PostCard from './PostCard'
import ReactMarkdown from "react-markdown"
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import { useRouter } from 'next/router'
import Seo from "../components/Seo"

const PostDetail = ({ post, PostData, morePost, categoryPost}) => {
  const Router = useRouter()
  const url = "https://manuscripts.tech" + Router.asPath
  const token = PostData
  // console.log(Router)/

  const submitForm = async (token) => {
    // console.log("clicked")
    let Name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    if (document.getElementById("name").value == "") {
      document.getElementById("errorInForm").classList.remove("hidden")
    }
    if (document.getElementById("email").value == "") {
      document.getElementById("errorInForm").classList.remove("hidden")
    }
    if (document.getElementById("message").value == "") {
      document.getElementById("errorInForm").classList.remove("hidden")
    }


    else {
      const url = fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/suggestions`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_COMMENT}`,
          'Accept': "application/json",
          'Content-Type': "application/json"
        },
        body: JSON.stringify({ data: { name: Name, email: email, page: Router.asPath, message: message } })
      })
      document.getElementById("successSubmitted").classList.remove("hidden")
    }
  }

  const testString = post.attributes.content
  const HEADING_R = /(#{1,6} .*)\r?\n/g;
  const headings = Array.from(testString.matchAll(HEADING_R), m => m[1]);

  
  return (
    <>
    <div className='mt-16'>
    <Seo item={post}/>
      <div className="flex min-h-screen">
        <div className="w-52 bg-gray-200 shadow-md border-l-2 hidden lg:flex mr-2">
          <div>
            <div className="container py-10 mx-auto flex">
              <div className="bg-white p-2 rounded shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Suggest some changes or tell us how we valued you? FreeLance Projects accepted.</p>
                <p className="text-xs text-red-500 mt-3 hidden" id='errorInForm'>Please fill all the data</p>
                <p className='text-sm text-green-500 hidden' id="successSubmitted">Suggestion submitted successfully</p>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => { submitForm(token) }}>Submit</button>
              </div>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-700'>Browse Categories</h3>
            <div className='mx-2'>
              {
                categoryPost.map((item)=>{
                  return (
                  <>
                   <Link href={`/category/${item.attributes.slug}`}><p className='bg-white hover:font-bold shadow-sm text-lg my-2 rounded text-center'>{item.attributes.name}</p>
                  </Link>
                  </>
                  )
                })
              }
            </div>   
          </div>
        </div>
        <div className='flex-1 shadow-lg mt-3'>
          <main>
            <div className="flex justify-between py-3 align-middle mt-2"><h1 className='mx-auto text-3xl md:text-4xl text-gray-700 font-bold text-center mb-4 '>{post.attributes.title}</h1>
            </div>
            <section className="text-gray-600 body-font border-b-2 border-gray-400 -mb-8 lg:-mb-14">
              <div className="flex align-middle justify-center">
                <div className="inline-block md:inline-flex py-2 z-10">
                  <Link href={`/category/${post.attributes.category.data.attributes.slug}`}>
                    <div className="text-xl lg:px-2 text-indigo-600 hover:text-blue-600 hover:shadow-sm rounded hover:bg-cyan-200 hover:cursor-pointer">Category: &nbsp;
                      <small className='text-lg font-bold'>
                        {post.attributes.category.data.attributes.name}
                      </small>
                    </div>
                  </Link>
                  <div className="text-xl lg:px-2">Created on: &nbsp;
                    <small>
                      <Moment format='MMM Do ,YYYY'>{post.attributes.createdAt}</Moment>
                    </small>
                  </div>
                  <div className="text-xl lg:px-2">Last Updated: &nbsp;
                    <small>
                      <Moment format='MMM Do ,YYYY'>{post.attributes.publishedAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </section>
            <div>
              <Image src={post.attributes.thumbnail.data &&  post.attributes.thumbnail.data.attributes.url} alt={post.attributes.thumbnail.data && post.attributes.thumbnail.data.attributes.name} layout="responsive"
                width={700}
                height={500}
                objectFit="contain"
                className='mt-5' />
            </div>
            <article>
              <div 
              
              className='flex align-middle justify-center mb-4 border-b-2 border-gray-500 mx-2'>
                <ReactMarkdown
                  children={post.attributes.content}
                  escapeHtml={false}
                  className = "prose prose-lg xl:prose-xl prose-img:border-2px prose-img:border-gray-600 prose-h1:underline prose-a:bg-cyan-200 hover:prose-a:bg-blue-200 hover:prose-a:no-underline prose-a:no-underline prose-code:max-w-xl"
                  style={{ textDecoration: 'none' }}
                 /> 
              </div>
            </article>
            <small className='text-center w-full flex justify-center align-bottom'>Thanks for Reading</small>
          </main>
          <div className="flex align-middle my-2 justify-between px-2 mr-2">
            <EmailShareButton url={url}><EmailIcon size={32} round={true} /></EmailShareButton>
            <FacebookShareButton url={url}><FacebookIcon size={32} round={true} /></FacebookShareButton>
            <WhatsappShareButton url={url}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
            <RedditShareButton url={url}><RedditIcon size={32} round={true} /></RedditShareButton>
            {/* <PinterestShareButton url={url}><PinterestIcon size={32} round={true}/></PinterestShareButton> */}
            <TelegramShareButton url={url}><TelegramIcon size={32} round={true} /></TelegramShareButton>
            <TwitterShareButton url={url}><TwitterIcon size={32} round={true} /></TwitterShareButton>
            <VKShareButton url={url}><VKIcon size={32} round={true} /></VKShareButton>
          </div>
        </div>
        <div className="w-52 px-0 bg-gray-200 shadow-sm border-l-2 hidden md:flex  ml-0 lg:ml-2">
        <div className='mt-4'>
          <h3 className='text-2xl font-semibold'>Table of contents</h3>
          <div className='border-l-4 border-blue-500'>
        {
          headings.map((item)=>{
            return(
              <>
              <p className='px-2'>{item}</p> <br />
              </>
            )
          })
        }
        </div>
        </div>
        </div>
      </div>
      <h3 className='text-3xl text-center mt-4 font-bold'>More From us </h3>
      <div className='mt-8 grid align-between grid-cols-1 lg:grid-cols-3'>
         { 
           morePost.slice(0,6).map((item)=>{
             return (
               <PostCard item={item} key={Math.random()}/>
             )
           })
         } 
      </div>
      </div>
    </>
  )
}

export default PostDetail
