import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

function Projects() {
  const content = [
  {
    title: "Home Page",
    description:
      "A clean and responsive homepage designed to showcase announcements, featured posts, and essential information dynamically. Built using React, Tailwind CSS, it offers smooth,fast loading, and a welcoming first impression of the platform.",
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
      "A detailed post view page where users can read full blog posts, view author information, and interact seamlessly. Optimized for readability with a structured layout and dynamic content fetching from Appwrite backend, ensuring real-time updates and responsive design.",
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
      "A fully functional post creation interface that allows authenticated users to create and publish blogs instantly. Features include React Hook Form validation, image upload, and rich text inputs — streamlining the process of contributing new content with user-friendly controls.",
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
    title: "Signup Page",
    description:
      "A secure and user-friendly signup page built with Appwrite authentication. It allows new users to register quickly and access personalized features. Includes proper error handling, responsive form fields, and modern UI styling consistent with the site’s overall design language.",
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
    <div className='text-5xl text-white flex flex-col items-center py-4'>
    <h1 className="mb-4 ">
     My Projects
    </h1>

    <div className="mt-28 p-4 flex flex-row justify-between w-full">
    <StickyScroll content={content} />
    <h1 className="mx-2">Mini Blog</h1>
    </div>
    
    <div className="mt-28 p-4 flex flex-row justify-between w-full">
    <StickyScroll content={content} />
    <h1 className="mx-2">Mini Blog</h1>
    </div>
    </div>
  )
}

export default Projects