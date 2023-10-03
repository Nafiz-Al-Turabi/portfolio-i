import React, { useEffect, useState } from 'react';
import './Projects.css'
import ProjectCard from '../../Card/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className=' pt-20'>
            <div className='animation-fade-up1 mb-4'>
                <h1 className='text-4xl md:text-2xl lg:text-5xl text-center font-bold secondary-text'>MY Creative work <br /> Latest <span className='primary-text'>Projects</span> </h1>
            </div>
            <div className='grid grid-cols-1 gap-10'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;