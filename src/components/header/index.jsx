import React from 'react'
import { MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Header = ({ headerData }) => {
    return (
        <>
            <div className="row container-fluid px-5">
                <div className="col-12 mb-3">
                    <h1 className='text-center'>{headerData?.fullName || 'Full Name'}</h1>
                </div>
                <div className="col-12 text-center mb-2">
                    <span className='text-center'><MdEmail />{headerData?.email || 'example@example.com'}, </span>
                    <span><HiPhone />{headerData?.phoneNumber || '1234567890'}, </span>
                    <span><MdLocationOn />{headerData?.address || '123, abc, address'}, </span>
                    <span><FaLinkedin />{headerData?.linkedIn || 'username'}</span>
                </div>
                <div className="col-12 mb-3"><hr /></div>
            </div>
        </>
    )
}

export default Header