import React, { useState } from 'react'

const HeaderForm = ({ sendData }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [linkedIn, setLinkedIn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            linkedIn: linkedIn,
        }
        sendData(formData)
    }
    return (
        <>
            <form className='w-100 p-3'>
                <b>Personal/Contact Details</b>
                <div className="mb-1 mt-3">
                    <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="EmailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputFullName" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputFullName" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputFullName" className="form-label">LinkedIn</label>
                    <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
                </div>

                <div className='text-end'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default HeaderForm