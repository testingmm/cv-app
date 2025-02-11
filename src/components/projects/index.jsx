import React from 'react'

const Projects = ({ projectsData }) => {
    return (
        <>
            <div className='row container-fluid px-5'>
                <div className='col-12'>
                    <h4>Projects</h4>
                    {projectsData && projectsData.length > 0 && projectsData.map((proj, index) => {
                        return (
                            <div key={index}>
                                <b>{proj.projectName}</b>
                                <ul>
                                    {proj.projectDescription && proj.projectDescription.length > 0 && proj.projectDescription.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className='col-12'><hr /></div>
            </div>
        </>
    )
}

export default Projects