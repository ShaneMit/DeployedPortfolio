import React from 'react'
import Project from './Project'
import Listivity from './../../assets/Listivity.png'
import CoZone from './../../assets/CoZone.jpg'
import BudgetTracker from './../../assets/BudgetTracker.png'
import FitnessTracker from './../../assets/FitnessTracker.png'
import NoteTaker from './../../assets/NoteTaker.png'
import ComingSoon from './../../assets/ComingSoon.png'



const myProjects = [
  {
    title: 'Listivity',
    description: 'Collaborated with a group to create an application where a user can save activities that they would like to do by category. The user can then use a randomizer to be presented with a random activity from their list.',
    githubLink: 'https://github.com/ShaneMit/Project2',
    deployedLink: 'https://radiant-woodland-54871.herokuapp.com/',
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
  },
  {
    title: 'Note Taker',
    description: 'An application for the user to write and manage notes.',
    githubLink: 'https://github.com/ShaneMit/NoteTaker',
    deployedLink: 'https://salty-headland-29977.herokuapp.com/',
    imageAddress: NoteTaker
  },
  {
    title: 'ReactFolio',
    description: 'Collaberated with a team to create an application with React where a user can build a portfolio by selecting from prebuilt components.',
    githubLink: 'Coming Soon',
    deployedLink:'Coming Soon',
    imageAddress: ComingSoon
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