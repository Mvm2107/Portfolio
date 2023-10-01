import React from 'react'
import Blockchain from "../assests/blockchain.jpg"
import Realestate from "../assests/realestate.jpg"
import Dataanalytics from "../assests/dataanalytics.jpg"
import Netflix from "../assests/netflix.jpg"
import Burger from "../assests/burger.jpg"
import Scorekeeper from "../assests/scorekeeper.png"
import Dashboardimg from "../assests/Dahboard.png"

const Work = () => {
  return (
   <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div className='pb-8 px-4'>
            <p className='text-4xl font-bold border-b-4 inline border-pink-600 '>Work</p>
            <p className='py-6'>// check out some of my recent work</p>
         </div>

         <div className='px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${Blockchain})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div content-div'>
               <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold teext-white tracking-wider'>
                      Crime Activity Analysis
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://public.tableau.com/app/profile/manivannan.m2382/viz/initialintern12325/Dashboard3">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button> 
                    </a>
                    {/* <a href="">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> 
                    </a> */}
                </div>
               </div>
            </div>

            <div style={{backgroundImage:`url(${Realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div content-div'>
               <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold teext-white tracking-wider'>
                      EDA-Covid-19
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Mvm2107/CVIP-Manivannan-3817/tree/main/EDA-Covid-19">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button> 
                    </a>
                    {/* <a href="">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> 
                    </a> */}
                </div>
               </div>
            </div>

            <div style={{backgroundImage:`url(${Dataanalytics})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto container-div content-div'>
               <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold teext-white tracking-wider'>
                      Mobile price classification
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Mvm2107/CVIP-Manivannan-3817/tree/main/Mobile%20Price%20Classification">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button> 
                    </a>
                    {/* <a href="">
                       <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> 
                    </a> */}
                </div>
               </div>
            </div>





            {/* changes */}
 


         </div>

      </div>
    </div>
  )
}

export default Work
