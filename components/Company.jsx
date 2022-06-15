import React from 'react'
import PostCard from './PostCard';
import AllCategories from './AllCategories';
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

const Company = ({post, category}) => {
  const url = "https://manuscripts.tech/company"
  
  return (
    <div>
      <div className="w-full h-screen bg-[url('/images/home-cover.png')] bg-no-repeat bg-cover bg-fixed">
        <main className="px-3 mt-16">
          <h1 className='text-4xl text-gray-700 md:text-6xl pt-6 text-center font-bold dark:text-neutral-200'>MANUSCRIPTS</h1>
          <p className="font-semibold  text-xl md:text-2xl text-center rounded mt-6 border-b-2 border-black pb-6 dark:text-neutral-50">
            <span className='text-2xl md:text-4xl text-blue-500 py-4 dark:text-blue-300'>Welcome Buddy! -To the house of knowledge</span><br />
            Here, at Manuscripts we write awesome educational blogs! a pack full of fun and knowledge. You can get content related to Cbse, Artificial Intelligence, Science, Mathematics, Case studies and much more!
          </p>
          <div className="mt-6">
            <h2 className='text-left ml-6 font-semibold text-2xl md:text-4xl underline dark:text-white'><i>Get Connected to us </i>:</h2>
            <div className='bock md:flex align-middle justify-between p-2 mt-6 mx-16'>
              <EmailShareButton url={url}><EmailIcon size={50} round={true} /></EmailShareButton>
              <FacebookShareButton url={url}><FacebookIcon size={50} round={true} /></FacebookShareButton>
              <WhatsappShareButton url={url}><WhatsappIcon size={50} round={true} /></WhatsappShareButton>
              <RedditShareButton url={url}><RedditIcon size={50} round={true} /></RedditShareButton>
              {/* <PinterestShareButton url={url}><PinterestIcon size={50} round={true}/></PinterestShareButton> */}
              <TelegramShareButton url={url}><TelegramIcon size={50} round={true} /></TelegramShareButton>
              <TwitterShareButton url={url}><TwitterIcon size={50} round={true} /></TwitterShareButton>
              <VKShareButton url={url}><VKIcon size={50} round={true} /></VKShareButton>
            </div>

          </div>
          <div className="flex align-middle justify-center mt-16 text-xl text-slate-700 font-bold dark:text-neutral-100">
            <span> #ContentIsCongress &nbsp;</span> <br />
            <br />
            <p>-Witness the revolution</p>
          </div>
          <div className='flex align-center mt-2 justify-center'>
            <a href= "#readOurBlogs"className='shadow-lg bg-cyan-600 px-4 py-3 hover:bg-cyan-700 transition rounded-full text-white font-bold text-lg cursor-pointer'>
              &darr;
            </a>
          </div>
        </main>
      </div>
      <div id='readOurBlogs'>
      <h2 className='text-center mt-6 text-4xl font-bold text-gray-800 dark:text-neutral-50'>Read Our Blogs</h2>
      <div className='mt-6 flex-1 grid align-between grid-cols-1 lg:grid-cols-3 md:mx-6 bg-neutral-50 dark:bg-slate-600'>
        {
          post.map((item)=>{
            return(
              <PostCard item= {item} key={item.id}/>
            )
          })
        }
      </div>
      </div>
      <div id="readOurCategory">
      <h2 className='text-center mt-6 text-4xl font-bold text-gray-800 dark:text-neutral-50'>Browse By Category</h2>
      <div className="bg-neutral-50 dark:bg-slate-600 md:mx-6">
        <AllCategories category={category}/>
        </div>
      </div>
    </div>
  )
}

export default Company