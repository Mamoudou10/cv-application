import "../styles/Experience.css"

export default function Experience({ data = [], onUpdate }) {
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      location: "",
    };
    onUpdate([...data, newExperience]);
  };

  const removeExperience = (id) => {
    onUpdate(data.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    onUpdate(
      data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  return (
    <div className="experience-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h2>Expérience Professionnelle</h2>
          <p>Ajoutez vos expériences professionnelles les plus pertinentes</p>
        </div>
      </div>

      <div className="form-section">
        {data.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Aucune expérience ajoutée</h3>
            <p>Commencez par ajouter votre première expérience professionnelle</p>
            <button
              type="button"
              className="btn btn-primary btn-large"
              onClick={addExperience}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ajouter une expérience
            </button>
          </div>
        ) : (
          <>
            {data.map((experience, index) => (
              <div key={experience.id} className="experience-item">
                <div className="experience-header">
                  <div className="experience-number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="experience-title">
                    <h3>Expérience {index + 1}</h3>
                    <p>Renseignez les détails de cette expérience</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger btn-small"
                    onClick={() => removeExperience(experience.id)}
                    title="Supprimer cette expérience"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Supprimer
                  </button>
                </div>

                <div className="experience-content">
                  <div className="form-row">
                    <div className="form-group half">
                      <label className="required">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Entreprise
                      </label>
                      <input
                        type="text"
                        value={experience.company || ''}
                        onChange={(e) =>
                          updateExperience(experience.id, "company", e.target.value)
                        }
                        placeholder="Ex: Google France"
                        required
                      />
                    </div>

                    <div className="form-group half">
                      <label className="required">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 7L10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Poste
                      </label>
                      <input
                        type="text"
                        value={experience.position || ''}
                        onChange={(e) =>
                          updateExperience(experience.id, "position", e.target.value)
                        }
                        placeholder="Ex: Développeur Full Stack"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Localisation
                      </label>
                      <input
                        type="text"
                        value={experience.location || ''}
                        onChange={(e) =>
                          updateExperience(experience.id, "location", e.target.value)
                        }
                        placeholder="Ex: Paris, France"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group third">
                      <label className="required">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Date de début
                      </label>
                      <input
                        type="date"
                        value={experience.startDate || ''}
                        onChange={(e) =>
                          updateExperience(experience.id, "startDate", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="form-group third">
                      <label>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Date de fin
                      </label>
                      <input
                        type="date"
                        value={experience.endDate || ''}
                        onChange={(e) =>
                          updateExperience(experience.id, "endDate", e.target.value)
                        }
                        disabled={experience.current}
                      />
                    </div>
                    <div className="form-group third">
                      <div className="checkbox-container">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={experience.current || false}
                            onChange={(e) => {
                              updateExperience(
                                experience.id,
                                "current",
                                e.target.checked
                              );
                              if (e.target.checked) {
                                updateExperience(experience.id, "endDate", "");
                              }
                            }}
                          />
                          <span className="checkmark"></span>
                          <span className="checkbox-text">Poste actuel</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Description des responsabilités
                    </label>
                    <textarea
                      value={experience.description || ''}
                      onChange={(e) =>
                        updateExperience(experience.id, "description", e.target.value)
                      }
                      placeholder="Décrivez vos principales responsabilités, réalisations et compétences développées dans ce poste..."
                      rows="4"
                    />
                    <div className="character-count">
                      {(experience.description || '').length}/1000 caractères
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="add-experience-section">
              <button
                type="button"
                className="btn btn-primary btn-large"
                onClick={addExperience}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ajouter une expérience
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
