import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage, metaData, metaCategory }) => {
  return (
    <Layout categories={categories} metaData={metaCategory}>
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1 className="text-2xl lg:text-4xl font-bold text-center">{homepage.attributes.hero.title}</h1>
          <Articles articles={articles} metaData={metaData} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" , sort: ['id:DESC'], pagination: {
      start: 0,
      limit: 6,
    }}),
    fetchAPI("/categories", { populate: "*"}),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      metaData: articlesRes.meta.pagination,
      metaCategory: categoriesRes.meta.pagination,
    },
    revalidate: 1,
  }
}

export default Home
