function ProjectCard({ Name, Category, Description, Code, LiveLink, Tech, Features, Image }) {
  return (
    <main
      className="min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] 
                    w-[90%] sm:w-[80%] md:w-[70%] lg:w-[950px] 
                    mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-96
                    bg-[#13161b] my-3 sm:my-4 md:my-5 
                    flex flex-col items-center pt-2 justify-between 
                    rounded-3xl sm:rounded-[40px] md:rounded-[50px] lg:rounded-full
                    px-4 sm:px-6 md:px-8"
    >
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-Kanit my-2 sm:my-3 text-center">
        {Name}
      </span>

      {/* Using a div with relative positioning to contain the image */}
      <div className="relative w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[280px] mt-2 sm:mt-3">
        {typeof Image === "string" ? (
          <img
            src={Image || "/placeholder.svg"}
            alt={`${Name} project`}
            className="w-full h-full object-cover rounded-3xl sm:rounded-[40px] md:rounded-[50px] lg:rounded-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 rounded-3xl sm:rounded-[40px] md:rounded-[50px] lg:rounded-full flex items-center justify-center">
            <span className="text-gray-400">Image not available</span>
          </div>
        )}
      </div>
    </main>
  )
}

export default ProjectCard
