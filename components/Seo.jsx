import React from 'react'
import Head from "next/head"

const Seo = ({ item }) => {
  return (
    <Head>
      <title>{item.attributes.title} | Manuscripts.tech</title>
      <meta property="og:title" content={"Manuscript.tech"} />
      <meta name='favicon' content='/images/logo.png' />
      <meta name="twitter:title" content={"Manuscript.tech"} />
      <meta name="description" content={item.attributes.metaDescription || "Manuscripts.tech is a journal and ed-tech blog producing site. Get the top class content, blogs and tech updates here at manuscripts. We aim to become the acronym of manuscripts for tech era."} />
      <meta name="keywords" content={item.attributes.metaDescription || "Manuscripts.tech, Ed-tech blogs, manuscripts of the tech era, manuscripts journal"} />
      <meta name="twitter:description" content={item.attributes.keywords || "Get the top class content, blogs and tech updates here at manuscripts. Manuscripts is journal that produces awesome ed-tech content for everyone"} />
      <meta name="og:image" content={"https://www.manuscripts.tech/images/globalShare.png" || item.attributes.thumbnail.data.attributes.url} />
      <meta property="og:url" content={"https://manuscripts.tech/" + item.attributes.slug || "https://manuscripts.tech"} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="576" />
      <meta property="og:image:alt" content={item.attributes.title || "https://manuscripts.tech/images/logo.png"} />
      <meta property="og:image:secure_url" content={"https://manuscripts.techc/images/logo.png" || `${process.env.NEXT_PUBLIC_STRAPI_URL}` + item.attributes.thumbnail.data.attributes.url} />
      <meta property="og:site_name" content="Manuscripts" />
      <meta property="og:locale" content="en_US" />
      <meta name="copyright" content="2022 Manuscripts" />
      <meta name="author" content="Manuscripts" />

    </Head>
  )
}

export default Seo