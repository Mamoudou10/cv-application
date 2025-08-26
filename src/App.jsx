// import { useState } from "react";
import PersonalInfo  from './components/PersonalInfo.jsx'
// import { Experience } from './components/Experience.jsx'
// import {Education} from './components/Education.jsx';
// import {Skills} from './components/Skills.jsx';
// import {CVPreview} from './components/CVPreview.jsx';
// import './styles/App.css';

import { useState } from "react"


export default function App() {
  const [cvData, setCvData] = useState({
     personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    experiences: [],
    educations: [],
    skills: []
  })
  return (
    <>
      <header className="app-header">
        <h1>Générateur de CV Professionnel</h1>
        <p>Créez votre CV en quelques clics</p>
      </header>
      <PersonalInfo />
    </>
  )
} 