import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';

const ExperienceForm = ({ sendData }) => {
    const [responsibility, setResponsibility] = useState('');
    const [experiences, setExperiences] = useState([{
        company: '',
        designation: '',
        startDate: '',
        endDate: '',
        responsibilities: []
    }]);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(experiences);
    }

    const onHandleAddNewExp = () => {
        setExperiences([...experiences, {
            company: '',
            designation: '',
            startDate: '',
            endDate: '',
            responsibilities: []
        }]);
    }

    const handleOnAddResponsibility = (index) => {
        if (responsibility && responsibility !== '' && !experiences[index].responsibilities.includes(responsibility)) {
            let reps = [...experiences];
            reps[index].responsibilities.push(responsibility);
            setResponsibility('');
        }
    }

    const onSetFields = (index, event) => {
        let exps = [...experiences];
        exps[index][event.target.name] = event.target.value;
        setExperiences(exps);
    }

    const onDeletePoint = (index, i) => {
        let exps = [...experiences];
        exps[index].responsibilities.splice(i, 1);
        setExperiences(exps);
    }

    const onDeleteExp = (index) => {
        let exps = [...experiences];
        exps.splice(index, 1);
        setExperiences(exps);
    }

    return (
        <>
            <form className='w-100 p-3'>
                <b>Experience</b>
                {experiences.map((exp, index) => {
                    return (
                        <div key={index} className='mb-2 border-1 border-bottom pb-2'>
                            <div className="mb-1 mt-2">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label htmlFor="exampleInputFullName" className="form-label">Designation</label>
                                    {index !== 0 && <MdDelete onClick={() => onDeleteExp(index)} style={{ cursor: 'pointer', color: 'red' }} />}
                                </div>
                                <input type='text' className='form-control' name='designation' value={exp.designation} onChange={(e) => onSetFields(index, e)} />
                            </div>
                            <div className="mb-1 mt-2">
                                <label htmlFor="exampleInputFullName" className="form-label">Company</label>
                                <input type='text' className='form-control' name='company' value={exp.company} onChange={(e) => onSetFields(index, e)} />
                            </div>
                            <div className='row mb-1'>
                                <div className='col-sm-6'>
                                    <label htmlFor="exampleInputFullName" className="form-label">Start Date</label>
                                    <input type='date' className='form-control' name='startDate' value={exp.startDate} onChange={(e) => onSetFields(index, e)} />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor="exampleInputFullName" className="form-label">End Date</label>
                                    <input type='date' className='form-control' name='endDate' value={exp.endDate} onChange={(e) => onSetFields(index, e)} />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputFullName" className="form-label">Responsibility</label>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <input type='text' className='form-control' value={responsibility} onChange={(e) => setResponsibility(e.target.value)} />
                                    <button type='button' onClick={() => handleOnAddResponsibility(index)} className='btn btn-success ml-2'>Add</button>
                                </div>
                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul className='mt-2'>
                                        {exp.responsibilities.map((responsibility, i) => (
                                            <li key={i}>{responsibility} <TiDelete onClick={() => onDeletePoint(index, i)} style={{ cursor: 'pointer', color: 'red' }} /></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )
                })}

                <div className='text-end'>
                    <button type='button' className='btn btn-info me-1' onClick={onHandleAddNewExp}>Add Experience</button>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default ExperienceForm