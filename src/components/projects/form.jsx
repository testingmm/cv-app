import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';

const ProjectsForm = ({ sendData }) => {
    const [projects, setProjects] = useState([{
        projectName: '',
        projectDescription: []
    }]);

    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(projects);
    }

    const onHandleAddNewProject = () => {
        let projs = [...projects];
        projs.push({
            projectName: '',
            projectDescription: []
        });
        setProjects(projs);
    }

    const onHandleAddDescriptionPoint = (index, event) => {
        let projs = [...projects];
        if (description !== '' && !projs[index].projectDescription.includes(description)) {
            projs[index].projectDescription.push(description);
            setDescription('');
            setProjects(projs);
        }
    }

    const setFields = (index, event) => {
        let projs = [...projects];
        projs[index][event.target.name] = event.target.value;
        setProjects(projs);
    }

    const deleteDescriptionPoint = (index, i) => {
        let projs = [...projects];
        projs[index].projectDescription.splice(i, 1);
        setProjects(projs);
    }

    const deleteProject = (index) => {
        let projs = [...projects];
        projs.splice(index, 1);
        setProjects(projs);
    }
    return (
        <>
            <form className='w-100 p-3'>
                <b>Projects</b>
                {projects.map((proj, index) => {
                    return (
                        <div key={index}>
                            <div className="mb-1 mt-2">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label htmlFor="exampleInputFullName" className="form-label">Project Name</label>
                                    {index !== 0 && <MdDelete style={{ cursor: 'pointer', color: 'red' }} onClick={() => deleteProject(index)} />}
                                </div>
                                <input type='text' className='form-control' name='projectName' value={proj.projectName} onChange={(e) => setFields(index, e)} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputFullName" className="form-label">Description(in bullet points)</label>
                                <div className='d-flex align-items-center justify-content-between mb-1'>
                                    <input type='text' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                                    <button className='btn btn-success' type='button' onClick={() => onHandleAddDescriptionPoint(index)}>Add</button>
                                </div>
                            </div>
                            <ul>
                                {proj.projectDescription && proj.projectDescription.length > 0 && proj.projectDescription.map((desc, i) => {
                                    return (
                                        <li key={i} className='m-1'>{desc} <TiDelete onClick={() => deleteDescriptionPoint(index, i)} style={{ cursor: 'pointer', color: 'red' }} /></li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}

                <div className='text-end'>
                    <button type='button' className='btn btn-info me-1' onClick={onHandleAddNewProject}>Add Project</button>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default ProjectsForm