import React from 'react'

const Summary = ({ summaryData }) => {
    return (
        <>
            <div className='row container-fluid px-5'>
                <div className='col-12'>
                    <h4>Summary</h4>
                    {summaryData && <p>{summaryData}</p>}
                </div>
                <div className='col-12'><hr /></div>
            </div>
        </>
    )
}

export default Summary