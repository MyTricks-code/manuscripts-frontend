import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <>
    {/* <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset" color="black">{category.attributes.name}</a>
                  </Link>
                </li>
                
              )
            })}
          </ul>
        </div>
      </nav> 
    </div>  */}
    <nav className="p-5 bg-white shadow">
      <div>
        <span className="text-2xl font-[Poppins]">
          hello
        </span>
      </div>      
    </nav>
    </>
  )
}

export default Nav
