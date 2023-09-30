import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
               <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold border-b-4 inline border-pink-600'>About</p>
               </div>
               <div></div>
               </div>
               <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi. I'm Manivannan, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                <p>I am a highly motivated and talented Data Scientist with a passion for leveraging data to drive meaningful insights and improve decision-making processes. My expertise in data analysis, machine learning, and statistical modeling has allowed me to uncover valuable patterns and trends in complex datasets.</p>  
                </div>
               </div>   
            
        </div>

    </div>
  )
}

export default About