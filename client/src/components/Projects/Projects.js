import React from 'react'
import Project from './Project'
import Listivity from './../../assets/Listivity.png'
import CoZone from './../../assets/CoZone.jpg'
import BudgetTracker from './../../assets/BudgetTracker.png'
import FitnessTracker from './../../assets/FitnessTracker.png'
import BookNook from './../../assets/BookNookPre.jpg'
import ReactFolio from './../../assets/ReactFolio.png'



const myProjects = [
  {
    title: 'ReactFolio',
    description: 'Collaberated with a team to create an application with React where a user can build a portfolio by selecting from customizable components.',
    githubLink: 'https://github.com/JonahHouse/React-folio',
    deployedLink: 'http://pacific-forest-54922.herokuapp.com/',
    imageAddress: ReactFolio
  },
  {
    title: 'Listivity',
    description: 'Collaborated with a group to create an application where a user can save activities that they would like to do by category. The user can then use a randomizer to be presented with a random activity from their list.',
    githubLink: 'https://github.com/ShaneMit/Listivity',
    deployedLink: 'https://listivity.herokuapp.com/',
    imageAddress: Listivity

  },
  {
    title: 'CoZone',
    description: 'Worked with a group to create an app that shows Covid19 statistics for any country the user searches for.',
    githubLink: 'https://github.com/TuffLuffJimmy/CoZone',
    deployedLink: 'https://tuffluffjimmy.github.io/CoZone/',
    imageAddress: CoZone
  },
  {
    title: 'Book Nook',
    description: 'An application that allows the user to find information on books and provides a link to purchase them.',
    githubLink: 'https://github.com/ShaneMit/BookNook',
    deployedLink: 'https://cozybooknook.herokuapp.com/',
    imageAddress: BookNook
  },
  {
    title: 'Budget Tracker',
    description: 'An Application for tracking budgets that includes functionality for when the user loses internet connection.',
    githubLink: 'https://github.com/ShaneMit/BudgetTracker',
    deployedLink: 'https://dry-meadow-67535.herokuapp.com/',
    imageAddress: BudgetTracker
  },
  {
    title: 'Fitness Tracker',
    description: 'This application tracks specific information about excercises for the user and stores them using MongoDB.',
    githubLink: 'https://github.com/ShaneMit/WorkoutTracker',
    deployedLink: 'https://vast-earth-06649.herokuapp.com/',
    imageAddress: FitnessTracker
  }

]

const Projects = () => {
  return(
    <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px'}}> 
      {myProjects.map(project => {
        return <Project imageAddress={project.imageAddress} title={project.title} description={project.description} githubLink={project.githubLink} deployedLink={project.deployedLink}/>
      })}
    </div>
  )
}

export default Projects