import PersonalInfo from "./components/PersonalInfo.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from './components/Skills.jsx';
import CVPreview from './components/CVPreview.jsx';
import "./styles/App.css";

import { useState } from "react";

export default function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      summary: "",
    },
    experiences: [],
    educations: [],
    skills: [],
  });

  const updatePersonalInfo = (personalInfo) => {
    setCvData((prev) => ({ ...prev, personalInfo }));
  };

  const updateExperiences = (experiences) => {
    setCvData((prev) => ({ ...prev, experiences }));
  };

  const updateEducation = (educations) => {
    setCvData((prev) => ({ ...prev, educations }));
  };

  const updateSkills = (skills) => {
    setCvData((prev) => ({...prev, skills}))
  }


  return (
    <>
      <header className="app-header">
        <h1>Générateur de CV Professionnel</h1>
        <p>Créez votre CV en quelques clics</p>
      </header>
      <PersonalInfo data={cvData.personalInfo} onUpdate={updatePersonalInfo} />
      <Experience data={cvData.experiences} onUpdate={updateExperiences} />
      <Education 
        data={cvData.educations}
        onUpdate={updateEducation}
      />
      <Skills 
        data={cvData.skills}
        onUpdate={updateSkills}
      />
      <CVPreview 
        data={cvData}
      />
    </>
  );
}
