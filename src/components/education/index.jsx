import moment from 'moment'
import React from 'react'

const Education = ({ educationData }) => {
    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center'
    }

    return (
        <>
            <div className='row container-fluid px-5'>
                <div className='col-12'>
                    <h4>Education</h4>
                    {educationData && educationData.length > 0 && educationData.map((edu, index) => {
                        return (
                            <div key={index}>
                                <div style={styles}>
                                    <div className='d-flex align-items-middle justify-content-between flex-column'>
                                        <b>{edu.degree}</b>
                                        <span>{edu.institute}</span>
                                    </div>
                                    <span>{moment(edu.startDate).format('MMM, YYYY')} <small>to</small> {moment(edu.endDate).format('MMM, YYYY')}</span>
                                </div>
                                <p>{edu.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='col-12'><hr /></div>
            </div>
        </>
    )
}

export default Education