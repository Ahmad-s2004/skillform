import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'

const App = () => {

  useEffect(()=>{
      let tl = gsap.timeline()
      tl.from("#heading", {
        y:80,
        opacity:0,
        duration:0.7,
      })
      .from("#emai", {
        y:40,
        opacity:0,
        duration:0.7,
        delay:-0.2
      })
      .from("#info1", {
        y:40,
        opacity:0,
        duration:0.4,
        delay:-0.2
      })
      .from("#info2", {
        y:40,
        opacity:0,
        duration:0.4,
        delay:-0.2
      })
      .from("#info3", {
        y:40,
        opacity:0,
        duration:0.4,
        delay:-0.2
      })
      .from("#info4", {
        y:40,
        opacity:0,
        duration:0.4,
        delay:-0.2
      })
      .from("#footer", {
        // y:40,
        opacity:0,
        duration:0.7,
        delay:-0.2
      })
  },[])
  return (
    <div className='w-screen px-4 md:px-0'>
  <div className="upper mx-auto md:w-2/4">
    <div className="header py-12 flex items-end overflow-hidden">
      <svg className="w-6 h-6 me-1 border-none outline-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(90)">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <rect width="24" height="24" fill="#242424"></rect>
          <rect x="4" y="8" width="12" height="12" rx="1" stroke="#ff57c1" strokeLinecap="round" strokeLinejoin="round"></rect>
          <path d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18" stroke="#ff57c1" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"></path>
        </g>
      </svg>
      <h4 className='font-semibold'>SKILLFORM</h4>
    </div>

    <div className="hero flex flex-col md:flex-row items-start md:items-end mt-2 md:mt-6 gap-4 md:gap-0">
      <div className='w-full md:w-2/4'>
        <h1 id='heading' className='font-semibold text-3xl md:text-[35px] leading-snug md:leading-tight'>
          <span className='block md:none mb-0.5'>A Teaching</span> <span className='block md:none mb-0.5'> Platform with </span> Flexibility, Finally.
        </h1>
      </div>
      <div id='emai' className='w-full md:w-2/4 mt-4 md:mt-0'>
        <h6 className='text-xs font-bold mb-1'>Notify me when it releases:</h6>
        <div className='flex flex-row sm:flex-row gap-2'>
          <input type="text" className='flex-1 bg-white text-black outline-none px-4 text-sm py-1.5 rounded-sm' placeholder='Email Address'/>
          <button className='bg-[#ff57c1] text-sm font-semibold text-white rounded-sm px-4 py-1.5'>Add me</button>
        </div>
      </div>
    </div>

    <div className="info grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div id='info1' className="rounded-md border-l-2 px-3 pt-5 pb-14 border-l-[#ff57c1]">
        <div className='text-xs font-semibold mb-3'>Modular</div>
        <div className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quis?</div>
      </div>
      <div id='info2' className="rounded-md border-l-2 px-3 pt-5 pb-14 border-l-[#ff57c1]">
        <div className='text-xs font-semibold mb-3'>Customizable</div>
        <div className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quis?</div>
      </div>
      <div id='info3' className="rounded-md border-l-2 px-3 pt-5 pb-14 border-l-[#ff57c1]">
        <div className='text-xs font-semibold mb-3'>Managed Payments</div>
        <div className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quis?</div>
      </div>
      <div id='info4' className="rounded-md border-l-2 px-3 pt-5 pb-14 border-l-[#ff57c1]">
        <div className='text-xs font-semibold mb-3'>Build by Teachers</div>
        <div className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quis?</div>
      </div>
    </div>
  </div>

  <div id='footer' className="lower bg-[#ff57c1] mt-20">
    <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-2/4 mx-auto text-black py-12 gap-4 md:gap-0'>
      <div className='text-xl font-bold text-center md:text-left'>All of this, coming in 2022.</div>
      <div className='text-sm text-center md:text-right'>Learn more by following us on <span className='font-bold'>Twitter</span></div>
    </div>
  </div>
</div>

  )
}


export default App

