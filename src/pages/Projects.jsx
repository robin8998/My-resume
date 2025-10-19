import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

function Projects() {
  const content = [
  {
    title: "Home Page",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img 
        src="/images/Blog/Home.png" 
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Home Image" />
      </div>  
    ),
  },
  {
    title: "Post View",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/images/Blog/Post.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Post View Image"
        />
      </div>
    ),
  },
   {
    title: "Add Post",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img 
        src="/images/Blog/newPost.png" 
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Add Post Image" />
      </div>  
    ),
  },
   {
    title: "Home Page",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img 
        src="/images/Blog/Signup.png" 
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Signup Page" />
      </div>  
    ),
  },
];
  return (
    <div className='text-5xl text-white flex flex-col items-center'>
    <h1>
     My Projects
    </h1>

    <div>
    <StickyScroll content={content} />
    </div>
    </div>
  )
}

export default Projects