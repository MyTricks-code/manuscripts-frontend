import React from 'react'

const NewsCard = ({item}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden border-l-2">
    <div className="container px-5 pt-5 mx-auto border-9">
      <div className="-my-8 divide-y-2 divide-gray-100">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
            <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
    </div>
    </div>
  </section>
  )
}

export default NewsCard