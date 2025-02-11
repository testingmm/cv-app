import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io';

const SkillsForm = ({ sendData }) => {
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(skills);
    }

    const handleOnAddSkill = (e) => {
        e.preventDefault();
        if (skill !== '' && !skills.includes(skill)) {
            setSkills([...skills, skill]);
            setSkill('');
        }
    }

    const onDeleteSkill = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    }

    return (
        <>
            <form className='w-100 p-3'>
                <b>Skills</b><br />
                {skills && skills.length > 0 && skills.map((skill, index) => {
                    return <div className='badge bg-primary mt-2 m-1' key={index} onClick={() => onDeleteSkill(index)} style={{ cursor: 'pointer' }}>{skill}</div>
                })}
                <div className="mb-2 mt-2">
                    <label htmlFor="exampleInputFullName" className="form-label">Skill</label>
                    <div className='d-flex align-items-center justify-content-between'>
                        <input type='text' className='form-control' value={skill} onChange={(e) => setSkill(e.target.value)}></input>
                        <button type='button' onClick={handleOnAddSkill} className='btn btn-success ml-2'>Add</button>
                    </div>
                </div>

                <div className='text-end'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default SkillsForm