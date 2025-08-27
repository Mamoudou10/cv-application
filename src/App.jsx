import { useEffect, useMemo, useState } from "react";
import PersonalInfo from "./components/PersonalInfo.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import CVPreview from "./components/CVPreview.jsx";
import "./styles/App.css";

export default function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      summary: "",
      photo: null,
    },
    experiences: [],
    educations: [],
    skills: [],
  });

  const [currentStep, setCurrentStep] = useState(0);
  const steps = useMemo(() => [
    { key: "personal", label: "Infos" },
    { key: "experience", label: "Expérience" },
    { key: "education", label: "Formation" },
    { key: "skills", label: "Compétences" },
    { key: "preview", label: "Aperçu" }
  ], []);

  // Autosave/load
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cvData");
      if (raw) {
        setCvData(JSON.parse(raw));
      }
    } catch {
      void 0;
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cvData", JSON.stringify(cvData));
    } catch {
      void 0;
    }
  }, [cvData]);

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
    setCvData((prev) => ({ ...prev, skills }));
  };

  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const goPrev = () => setCurrentStep((s) => Math.max(s - 1, 0));
  const goTo = (idx) => setCurrentStep(idx);

  return (
    <div>
      <header className="app-header">
        <h1>Générateur de CV Professionnel</h1>
        <p>Créez un CV moderne en quelques clics</p>
      </header>

      <div className="app-stepper">
        <div className="progress-bar"><div className="progress" style={{ width: progress + '%' }} /></div>
        <div className="stepper">
          {steps.map((step, idx) => (
            <button
              key={step.key}
              className={`step ${idx === currentStep ? 'active' : ''} ${idx < currentStep ? 'done' : ''}`}
              onClick={() => goTo(idx)}
              type="button"
            >
              <span className="step-index">{idx + 1}</span>
              <span className="step-label">{step.label}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="app-grid">
        {currentStep === 0 && (
          <section className="form-card" style={{ gridColumn: '1 / -1' }}>
            <PersonalInfo data={cvData.personalInfo} onUpdate={updatePersonalInfo} />
          </section>
        )}

        {currentStep === 1 && (
          <section className="form-card" style={{ gridColumn: '1 / -1' }}>
            <Experience data={cvData.experiences} onUpdate={updateExperiences} />
          </section>
        )}

        {currentStep === 2 && (
          <section className="form-card" style={{ gridColumn: '1 / -1' }}>
            <Education data={cvData.educations} onUpdate={updateEducation} />
          </section>
        )}

        {currentStep === 3 && (
          <section className="form-card" style={{ gridColumn: '1 / -1' }}>
            <Skills data={cvData.skills} onUpdate={updateSkills} />
          </section>
        )}

        {currentStep === 4 && (
          <section style={{ gridColumn: '1 / -1' }}>
            <CVPreview data={cvData} />
          </section>
        )}
      </main>

      <div className="nav-controls">
        <button type="button" className="btn" onClick={goPrev} disabled={currentStep === 0}>Précédent</button>
        {currentStep < steps.length - 1 ? (
          <button type="button" className="btn btn-primary" onClick={goNext}>Suivant</button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => goTo(4)}>Voir l'aperçu</button>
        )}
      </div>
    </div>
  );
}
