import React from 'react';
import Project from '../components/project.js';
import FavoriteProjects from '../components/favorite-projects.js';
import Info from '../components/info.js';

const AllProjects = () => {
  return (
    <div className='all-projects-section'>
        <div className='partOne'>
            <FavoriteProjects />
            <Info />
        </div>
    <Project />
    </div>
  );
};

export default AllProjects;