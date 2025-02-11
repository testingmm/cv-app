import React from 'react'
import moment from 'moment';

const Experience = ({ experienceData }) => {
    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center'
    }
    return (
        <>
            <div className='row container-fluid px-5'>
                <div className='col-12'>
                    <h4>Professional Experience</h4>
                    {experienceData && experienceData.length > 0 && experienceData.map((exp, index) => {
                        return (
                            <div className='mb-2' key={index}>
                                <div style={styles}>
                                    <div className='d-flex align-items-middle justify-content-between flex-column'>
                                        <b>{exp.designation}</b>
                                        <span>{exp.company}</span>
                                    </div>
                                    <span>{moment(exp.startDate).format('MMM, YYYY')} <small>to</small> {moment(exp.endDate).format('MMM, YYYY')}</span>
                                </div>
                                <ul className='mt-2'>
                                    {exp.responsibilities && exp.responsibilities.length > 0 && exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
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

export default Experience