import {MyPixalatedCanvas} from '@/components/MyCanvas'

function AboutMe() {
  return (
    <div className='flex flex-row justify-between w-full'>
      <div className='text-white text-center w-full space-y-4 mt-10 flex flex-col px-10 py-20'>
      <h1 className='text-9xl text-[#7fbf7f]'>Robin Singh</h1>
      <h2 className='text-6xl'>Web Developer</h2>
      <p className='text-2xl'>I creates fully funtional Web-Products,<br/>
      Ready to work on exciting projects!
      </p>
      </div>

      <div>
        <MyPixalatedCanvas/>
      </div>
    </div>
  )
}

export default AboutMe