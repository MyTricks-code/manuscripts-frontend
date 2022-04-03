import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <>
      <nav className="p-5 sticky bg-white shadow md:flex md:items-center md:justify-between z-[1]">
        <div className="flex justify-between items-center ">
          <span className="text-2xl font-bold cursor-pointer">
            <img className="h-10 inline"
              src="logo.png" height="50px" width="50px" />
            <Link href="/" ><a className="no-underline " style={{ textDecoration: 'none' }}>Manuscripts</a></Link>
          </span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
          </span>
          <div class="dropdown ml-7 mr-2 bg-cyan-400 font-medium text-xl rounded px-2 lg:px-3 py-2y lg:py-2">
          <span>Categories&#8595;</span>
          <div class="dropdown-content">
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/category/${category.attributes.slug}`}>
                  <a className="dropdown-item" color="black">{category.attributes.name}</a>
                </Link>
              </li>
            )
          })}  
          </div>
        </div>

        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0">
            <Link href="/" className="text-xl hover:text-cyan-500 hover:bg-cyan-300 hover:shadow-lg duration-500"><a style={{ textDecoration: 'none' }} className="hover:text-white-500 hover:bg-cyan-300 px-3 py-1 rounded  duration-500 hover:shadow-lg hover:border-b font-medium">HOME</a></Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/company"><a style={{ textDecoration: 'none' }} className="hover:text-white-500 hover:bg-cyan-300 px-3 py-1 rounded  duration-500 hover:shadow-lg hover:border-b font-medium" >COMPANY</a></Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/about" className="text-xl hover:text-cyan-500 duration-500 no-underline hover:underline"><a style={{ textDecoration: 'none' }} className="hover:text-white-500 hover:bg-cyan-300 px-3 py-1 rounded  duration-500 hover:shadow-lg hover:border-b font-medium">ABOUT</a></Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/contact" className="text-xl hover:text-cyan-500 duration-500"><a style={{ textDecoration: 'none' }} className="hover:text-white-500 font-medium hover:bg-cyan-300 px-3 py-1 rounded duration-500 hover:shadow-lg hover:border-b font-medium" >CONTACT</a></Link>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Nav
