import React from 'react'

export default function Home6() {
  return (
    <section className="py-40 px-20 ">
      <h2 className="text-3xl text-center ">
        A True SAAS-Focused startup Accounting Team
      </h2>
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt=""
            className=""
          />
        </div>

        <div className="flex flex-col md:flex-row flex-1 border-2 border-amber-300  gap-10 rounded-2xl">
          <div className='px-10 py-10'>
            <div className="px-10 py-10  w-10 h-10 rounded-full bg-blue-400"></div>
          </div>
          <div className="px-10 py-10 flex flex-col gap-2">
            <h3 className="text-2xl">One Stop Shop</h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              vero mollitia sit dolorem et itaque numquam nihil amet consequatur
              temporibus?
            </p>
          </div>
          <div className="h-full w-120 bg-amber-400 ">
            <h4 className='rotate-270'>Get a Proposal</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
