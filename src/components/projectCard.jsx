import React from 'react'

function projectCard(project){
  return (
    <div>
        <h1>Name</h1> : <p>{project.Name}</p>
        <h1>Category</h1> : <p>{project.Category}</p>
        <h1>Description</h1> : <p>{project.Description}</p>
        <h1>Code</h1> : <p>{project.Code}</p>
        <h1>LiveLink</h1> : <p>{project.LiveLink}</p>
        <h1>Tech</h1> : <p>{project.Tech}</p>
        <h1>Features</h1> : <p>{project.Features}</p>
        <h1>Image</h1> : <p>{project.Image}</p>
    </div>
  )
}

export default projectCard