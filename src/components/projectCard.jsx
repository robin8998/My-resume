import React from 'react'

function projectCard(project){
  return (
    <div>
        <h1>name</h1> : <p>{project.name}</p>
        <h1>Category</h1> : <p>{project.Category}</p>
        <h1>description</h1> : <p>{project.description}</p>
    </div>
  )
}

export default projectCard