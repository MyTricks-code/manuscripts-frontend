
import React from 'react'
import NavLink from 'next/link'


const Navbar = ({category}) => {

  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true)
  // }, [])


  // const SunIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
  //   <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
  // </svg>
  // const MoonIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
  //   <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
  // </svg>

  // const { systemTheme, theme, setTheme } = useTheme()
  // const renderThemeChanger = () => {
  //   console.log("Clicked")

  //   if (!mounted) return null

  //   const currentTheme = theme === 'system' ? systemTheme : theme

  //   if (currentTheme === "dark") {
  //     return (
  //       <button className='px-2' onClick={() => setTheme("light")}>{SunIcon}da</button>
  //     )
  //   }
  //   else {
  //     return (
  //       <button onClick={() => setTheme("dark")}>{MoonIcon}da</button>
  //     )
  //   }
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top shadow-xl ">
        <div className="container-fluid">
          <NavLink href="/"><img src="/images/logo.png" alt="Manuscripts.tech" className='mr-2' width={50} height={50} /></NavLink><NavLink href="/"><a className="navbar-brand poppins font-bold" href="/">Manuscripts</a></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <div className="nav-item">
                <div className="btn-group dropstart">
                  <button type="button" className="btn btn-secondary dropdown-toggle mt-2 lg:mt-0 mr-16" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </button>
                  <ul className="dropdown-menu text-center max-h-30">
                    <div className="overflow-y-scroll">
                      Hello
                    </div>
                  </ul>
                </div>


              </div> */}
              <li className="nav-item">
                <NavLink href="/" activeClassName='nav-link active' exact={true}><a className='nav-link font-bold font-white text-white'>Home</a></NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/company" activeClassName='nav-link active' exact={true}><a className="nav-link font-bold font-white text-white">Company</a></NavLink>
              </li>
              {/* <li className="nav-item dropdown">
              <NavLink href="/Dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a></NavLink>
              <ul className="dropdown-menu max-w-xl" aria-labelledby="navbarDropdown">
                <li><NavLink href="/"><a className="dropdown-item" href="#">Action</a></NavLink></li>
                <li><NavLink href="/"><a className="dropdown-item" href="#">Another action</a></NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink href="/"><a className="dropdown-item" href="#">Something else here</a></NavLink></li>
              </ul>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
