import React, { useState, useEffect } from 'react'
import NavLink from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [CookieMode, setCookieMode] = useState()
  const defaultIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
  </svg>
  const [icon, setIcon] = useState(defaultIcon)
  const modeChanger = (e) => {
    e.preventDefault()
    if (document.documentElement.classList.contains("dark")) {
      Cookies.set("mode", "light")
      console.log("Dark")
      document.body.classList.remove("bg-slate-800")
      document.documentElement.classList.remove("dark")
      localStorage.setItem('mode', 'white', { expires: 365 })
      setIcon(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      </svg>)
    }
    else {
      Cookies.set("mode", "dark" ,{ expires: 365 })
      document.body.classList.add("bg-slate-800")
      document.documentElement.classList.add("dark")
      localStorage.setItem('mode', 'dark')
      setIcon(defaultIcon)
    }
    console.log("Hey")
  }

  useEffect(() => {
    // setCookieMode(Cookies.get("mode"))
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    if (Cookies.get("mode") == "dark") {
      document.body.classList.add("bg-slate-800")
      document.documentElement.classList.add("dark")
      localStorage.setItem('mode', 'dark')
      setIcon(defaultIcon)

    }
  }, [])

  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      // includedLanguages : "en,ms,ta,zh-CN", // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
      'google_translate_element');

  }

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
  // document.getElementsByClassName("goog-te-gadget-simple").style = "background : Blue"
  return (
    <>
      <nav className="navbar navbar-expand-lg dark:bg-white bg-dark navbar-dark fixed-top shadow-xl mb-6">
        <div className="container-fluid">
          <NavLink href="/"><div><img src="/images/logo.png" alt="Manuscripts.tech" className='mr-2 inline-flex' width={50} height={50} /><a className="navbar-brand poppins font-bold" href="/">Manuscripts</a></div></NavLink>
          <div className="lg:pl-16 lg:w-80 lg:mx-16  inline-flex align-middle justify-end">
            <button type='submit' onClick={searchFunction}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search md:mr-1 inline-flex my-2 text-white" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            </button>
            <div className='rounded'>
              <form onSubmit={searchFunction}>
            <input onSubmit={searchFunction} placeholder='Search' className='
md:border-b-4 border-neutral-300 rounded bg-transparent appearance-none focus:outline-none focus:shadow-lg focus:shadow-neutral-800  text-white text-sm md:text-lg md:flex md:w-full w-10 md:pl-1'
            type="text" 
            value={term} 
            aria-label="Search"  
            onChange={(e)=>setTerm(e.target.value)}
            ></input>
            </form>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mt-2">
                <button className="text-white px-2 py-1 rounded hover:bg-cyan-500" onClick={modeChanger}>
                  {icon}
                </button>
              </li>
              <li className="nav-item">
                <NavLink href="/" activeClassName='nav-link active' exact={true}><a className='nav-link font-bold font-white text-white'>Home</a></NavLink>
              </li>
              {/* <div className='rounded container max-h-90 w-full flex align-middle justify-center h-10' id='google_translate_element'>
              </div> */}
              <li className="nav-item">
                <a target="_blank" href="https://www.youtube.com/channel/UCJtaeZ3hMmGNPrgeien3uIQ" activeClassName='nav-link active' exact={true}><a className='nav-link font-bold font-white text-white'>Youtube</a></a>
              </li>
              <li className="nav-item">
                <NavLink href="/category" activeClassName='nav-link active' exact={true}><a className='nav-link font-bold font-white text-white'>Category</a></NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/company" activeClassName='nav-link active' exact={true}><a className="nav-link font-bold font-white text-white">Company</a></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar