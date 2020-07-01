import React from 'react'

const Project = props => {
  return(
    <>
      <div className="card shadow" style={{width: '18rem', display: 'flex', flexWrap:'wrap', padding: '10px', margin: '10px'}}>
        <img src={props.imageAddress} className="card-img-top shadow-sm" alt="..."/>
          <div className="card-body">
            <h1>{props.title}</h1>
            <p className="card-text">{props.description}</p>
            <a href={props.deployedLink} target="_blank">{props.title}</a>
            <br/>
            <a href={props.githubLink} target="_blank"> GitHub Repo</a>
          </div>
      </div>
    </>
  )
}

export default Project