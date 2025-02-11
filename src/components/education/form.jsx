import React from 'react'
import { MdDelete } from 'react-icons/md';

const EducationForm = ({ sendData }) => {
    const [education, setEducation] = React.useState([{
        institute: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: ''
    }]);

    const onHandleAddNewEdu = () => {
        setEducation([...education, {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            description: ''
        }]);
    }

    const onSetField = (index, e) => {
        let temp = [...education];
        temp[index][e.target.name] = e.target.value;
        setEducation(temp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(education);
    }

    const onDeleteEdu = (index) => {
        let temp = [...education];
        temp.splice(index, 1);
        setEducation(temp);
    }
    return (
        <>
            <form className='w-100 p-3'>
                <b>Education</b>
                {education.map((edu, index) => {
                    return (
                        <div key={index} className='mb-2 border-1 border-bottom pb-2'>
                            <div className="mb-1 mt-2">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label htmlFor="exampleInputFullName" className="form-label">Degree</label>
                                    {index !== 0 && <MdDelete className='text-danger' style={{ cursor: 'pointer' }} onClick={() => onDeleteEdu(index)} />}
                                </div>
                                <input type='text' className='form-control' name='degree' value={edu.degree} onChange={(e) => onSetField(index, e)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputFullName" className="form-label">University/CollegeSchool</label>
                                <input type='text' className='form-control' name='institute' value={edu.institute} onChange={(e) => onSetField(index, e)} />
                            </div>
                            <div className='row mb-1'>
                                <div className='col-sm-6'>
                                    <label htmlFor="exampleInputFullName" className="form-label">Start Date</label>
                                    <input type='month' className='form-control' name='startDate' value={edu.startDate} onChange={(e) => onSetField(index, e)} />
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor="exampleInputFullName" className="form-label">End Date</label>
                                    <input type='month' className='form-control' name='endDate' value={edu.endDate} onChange={(e) => onSetField(index, e)} />
                                </div>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="exampleInputFullName" className="form-label">Description</label>
                                <textarea rows={4} className='form-control' name='description' value={edu.description} onChange={(e) => onSetField(index, e)} />
                            </div>
                        </div>
                    )
                })}

                <div className='text-end'>
                    <button type='button' className='btn btn-info me-1' onClick={onHandleAddNewEdu}>Add Education</button>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default EducationForm