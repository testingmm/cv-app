import React, { useState } from 'react'

const SummaryForm = ({ sendData }) => {
    const [summary, setSummary] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(summary);
    }
    return (
        <>
            <form className='w-100 p-3'>
                <b>Summary</b>
                <div className="mb-2 mt-2">
                    <label htmlFor="exampleInputFullName" className="form-label">Summary</label>
                    <textarea rows={4} className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" value={summary} onChange={(e) => setSummary(e.target.value)} />
                </div>

                <div className='text-end'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default SummaryForm