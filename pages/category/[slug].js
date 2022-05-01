import Articles from "../../components/articles"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Category = ({ category, categories, metaData }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `Articles under ${category.attributes.name} from manuscripts. Awesome, useful and informative ${category.attributes.name} articles. -Manuscripts`,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1 color="white" className="text-2xl lg:text-4xl font-bold text-center" >{category.attributes.name}</h1>
          <Articles articles={category.attributes.articles.data} metaData={metaData} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  })
  const allCategories = await fetchAPI("/categories")

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
      metaData: matchingCategories.meta.pagination
    },
    revalidate: 1,
  }
}

export default Category
