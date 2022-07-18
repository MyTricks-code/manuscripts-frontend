import { useRouter } from "next/router"
import PostCard from "../../components/PostCard"

export default function Search({posts, meta}){
    console.log(posts)
    const router = useRouter()
    return(
        <>
        <div className='shadow-lg mt-16 pb-4'> 
        <h1 className='text-4xl font-bold text-center pt-6  dark:text-neutral-200'>Search Results</h1>
        <p className="text-center font-bold text-xl pt-6 dark:text-gray-50">About {meta.pagination.total} search results for the term "<span className='text-slate-700 underline dark:text-neutral-300 dark:decoration-red-600'>{router.query.term}</span>"</p>
        </div>
        <div className="mt-8 flex-1 grid align-between grid-cols-1 lg:grid-cols-3">
        {
            posts.map((item)=>{
                return(
                    
                        <PostCard item={item}/>
                        )
                    })
                }
        </div>
        </>
    )
}

export async function getServerSideProps({query : {term}}) {
    console.log("clicked")
    let headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
    const url = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?_q=${term}&populate=*`, {headers:headers})
    const res = await url.json() 
    console.log(res)
    return {
      props : {
        meta : res.meta,  
        posts : res.data,
      }
    }
}