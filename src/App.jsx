import { useState } from 'react';
import './App.css'
import FinalView from './components/final/FinalView';
import HeaderForm from './components/header/form';
import SummaryForm from './components/summary/form';
import SkillsForm from './components/skills/form';
import ExperienceForm from './components/experience/form';
import EducationForm from './components/education/form';
import ProjectsForm from './components/projects/form';

function App() {
  const [data, setData] = useState({});

  const handleHeaderData = (formData) => {
    setData({ ...data, headerData: formData })
  }

  const handleSummaryData = (formData) => {
    setData({ ...data, summary: formData });
  }

  const handleSkillsData = (formData) => {
    setData({ ...data, skills: formData });
  }

  const handleExperienceData = (formData) => {
    setData({ ...data, experience: formData })
  }

  const handleEducationData = (formData) => {
    setData({ ...data, education: formData });
  }

  const handleProjectsData = (formData) => {
    setData({ ...data, projects: formData })
  }


  return (
    <>
      <div className='row container-fluid'>
        <div className='col-4 d-flex align-items-center justify-content-center flex-column border-end'>
          <HeaderForm sendData={handleHeaderData} />
          <SummaryForm sendData={handleSummaryData} />
          <SkillsForm sendData={handleSkillsData} />
          <ExperienceForm sendData={handleExperienceData} />
          <EducationForm sendData={handleEducationData} />
          <ProjectsForm sendData={handleProjectsData} />
        </div>
        <div className='col-8'>
          <FinalView data={data} />
        </div>
      </div>
    </>
  )
}

export default App
