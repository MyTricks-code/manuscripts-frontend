import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Articles from "../../components/articles"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"


const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  
  return (
  
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 my-2">
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light rounded uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
      </div>
        <h1 className="text-xl lg:text-3xl font-semibold flex align-center justify-center my-2">{article.attributes.title}</h1>
      <div className="flex align-center display center my-2">
        <div className="uk-container uk-container-small">
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
          <hr className="mb-5 my-2" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            {/* <div>
              {article.attributes.author.picture && (
                <NextImage image={article.attributes.author.picture} />
              )}
            </div> */}
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom ">
                Thanks for reading
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes},
    revalidate: 1,
  }
}

export default Article
