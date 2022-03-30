import React from "react"
import Link from "next/link"
import NextImage from "./image"
import moment from "moment"


const Card = ({ article }) => {
  return (
    <>
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="text-center relative overflow-hidden shadow-md p-1 mb-3 rounded">
            <NextImage className="rounded" image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
          <span className="align-middle">{moment(article.attributes.createdAt).format('MMM DD, YYYY')}</span>
            <h2 id="title" className="transition duration-150 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
              {article.attributes.title}
            </h2>
            <p className="text-center text-lg text-gray-700 font-normal px-3 lg:px-4 mb-8">
              {article.attributes.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
    <div className="text-center">
    <Link href={`/article/${article.attributes.slug}`}>
      <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
    </Link>
  </div>
  </>
  )
}

export default Card
