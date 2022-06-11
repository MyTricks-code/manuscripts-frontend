import React, {useState} from 'react'
import CategoryCard from '../../components/CategoryCard'
import Seo from '../../components/Seo'

const slug = ({category , posts, meta}) => {
   
    
    
    // const searchFunction = async()=>{
    //   console.log("clicked")
    //   let headers = {
    //     Authorization: "Bearer 9931276284cbfd67c03cb49faee92d8fdcb577b42a14b1fecbf2f1b421fe330a3950c9fa2bdc1f9e571db4ca9c101fd3cbef1d707d72d3fe7f72687f9a885d3bbc427fdfddf17dfdaad64495dd7a08d9ed9614108f9024ed233f775d3af7a8d8e65b9f877f3bb502d38a5d5bd0dfe5ead3496199adb30bcfc4759a928ed1c5db"
    //   }
    //   const searchUrl = await fetch(`http://localhost:1337/api/categories?populate=*&sort=id:DESC&_q=${document.getElementById("searchBar").value}` , {
    //     headers : headers
    //   })
    //   const searchResult = await searchUrl.json()
    //   console.log(searchResult)
    //   setPosts(searchResult.data)
    //   Meta=searchResult.meta.pagination
    //   setMeta(searchResult.meta.pagination.total)
    // } 

  return (
    <>
    <Seo item={category}/>
    <div className='flex align-middle justify-center mt-2'>
    <div className="flex"><h1 className='title-font text-3xl lg:text-4xl font-bold underline'>{category.attributes.name}</h1></div>
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="text" placeholder="Search" id="searchBar"  aria-label="Search" />
    <button className="btn btn-outline-success" type="submit" onClick={(event)=>{searchFunction(), event.preventDefault()}}>Search</button>
    </form> */}
    </div>
      <div className="mx-2 lg:mx-4 text-center">
        {/* <h1 className='text-4xl font-bold underline text-center'>{category.attributes.name}</h1> */}
        <div className="border-slate-400">
        </div>
        {
          meta == 0 ? <p className='text-center'>
            No Data found
          </p> : posts.map((item)=>{
            return (
            <>
            {/* {item.attributes.title} */}
              <CategoryCard item={item} category={category} key={item.attributes.slug}/>
            </>
           )
          })
        }
      </div>  
    </>
  )
}

export default slug

export async function getStaticProps(context) {
    let headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
    let url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?filters[slug]=` + context.query.slug + "&populate=*" , {headers:headers})
    let post = await url.json()
    return {
      props: {
        category : post.data[0],
        posts : post.data[0].attributes.posts.data,
        // meta : post.data[0].meta.pagination
      }
    }
}