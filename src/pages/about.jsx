import React, { useEffect } from 'react';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {

  useEffect(() => {
    gsap.to("#card1",{
      scale:0.7,
      opacity:0,
      scrollTrigger : {
        trigger : "#card1",
        start: "top 15%",
        end : "bottom 15%",
        scrub : true
      }
    })

    gsap.to("#card2",{
      scale:0.7,
      opacity:0,
      scrollTrigger : {
        trigger : "#card2",
        start: "top 15%",
        end : "bottom 15%",
        scrub : true
      }
    })

  }, [])
  
 
  
  return (
    <main className='w-full flex flex-col bg-[#13161B]'>
      <div className='flex w-full justify-center flex-col items-center px-12 my-16 space'>

        {/* title */}
        <div className='text-2xl sticky top-1/6 bottom-0'>
        <h1 className=' font-Monoton tracking-[0.5em]'>About Me</h1>
        </div>

        {/* content 1  */}
         <div  id='card1' className='w-full sticky top-[40%] bg-transparent mt-16 p-20 rounded-xl font-Kanit text-2xl'>
         Hi, I'm <span className="font-semibold text-[#b2ad99]">Robin Singh</span> – a passionate front-end developer with a strong foundation in
                HTML, CSS, JavaScript, and React. I recently stepped into the world of web development and love crafting user-friendly, responsive,
                and visually appealing web applications.
         </div>

         <div  id='card2' className=' sticky top-[40%] bg-transparent mt-16 p-20 rounded-xl font-Kanit text-2xl'>
         I've explored tools like React Redux, React Router, and Appwrite to build full-stack projects, including my personal blog platform.
         I enjoy turning ideas into real-world projects and continuously learning to improve my skills.
         </div>

         <div  id='card3' className='sticky top-[40%] bg-[#13161B] mt-16 p-20 rounded-xl font-Kanit text-2xl'>
         Currently, I'm diving deeper into responsive design, UI/UX principles, and backend integration to become a more well-rounded developer.
      When I'm not coding, you'll find me exploring design inspiration or learning something new in tech.
         </div>
      </div>
    </main>
  );
}

export default About;