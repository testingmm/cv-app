import React from 'react'
import Header from '../header/index';
import Summary from '../summary/index';
import Skills from '../skills/index';
import Experience from '../experience/index';
import Education from '../education/index';
import Projects from '../projects/index';

const FinalView = ({ data }) => {
    return (
        <>
            <div className='container-fluid p-5'>
                <Header headerData={data.headerData} />
                <Summary summaryData={data.summary} />
                <Skills skillsData={data.skills} />
                <Experience experienceData={data.experience} />
                <Education educationData={data.education} />
                <Projects projectsData={data.projects} />
            </div>
        </>
    )
}

export default FinalView