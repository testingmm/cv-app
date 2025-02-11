import React from 'react'

const Skills = ({ skillsData }) => {
    return (
        <>
            <div className='row container-fluid px-5'>
                <div className='col-12'>
                    <h4>Skills</h4>
                    {skillsData && skillsData.length > 0 && skillsData.map((skill, index) => {
                        return <span className='m-1' key={index}>{skill},</span>
                    })}
                </div>
                <div className='col-12'><hr /></div>
            </div>
        </>
    )
}

export default Skills