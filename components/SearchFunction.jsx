import { useRouter } from 'next/router'
import React, {useState} from 'react'

const SearchFunction = () => {
  // search
  const router = useRouter()
  const [term, setTerm] =useState()
  const searchFunction = (e)=>{
    e.preventDefault()
    if(term===""){
      setTerm("Enter Here")
    } else {
      router.push(`/article/search?term=${term}`)
    }
  }
  return (
    <div><div className='flex align-middle justify-center mt-16'>
    <form className="d-flex pt-4" onSubmit={searchFunction}>
        <input 
        className="form-control me-2" 
        type="text" 
        value={term}
        placeholder="Search"  
        aria-label="Search"  
        onChange={(e)=>setTerm(e.target.value)} />
        <button className="btn btn-outline-success" type="submit" onClick={searchFunction}>Search</button>
      </form>
    </div></div>
  )
}

export default SearchFunction