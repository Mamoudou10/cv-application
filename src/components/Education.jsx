import "../styles/Education.css";

export default function Education({ data = [], onUpdate }) {
  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      location: "",
    };
    onUpdate([...data, newEducation]);
  };

  const removeEducation = (id) => {
    onUpdate(data.filter((edu) => edu.id !== id));
  };

  const updateEducation = (id, field, value) => {
    onUpdate(
      data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  return (
    <div className="education-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V10C2 11.1 2.9 12 4 12H20C21.1 12 22 11.1 22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 10L12 16L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L12 12L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h2>Formation & Éducation</h2>
          <p>Ajoutez vos diplômes et formations académiques</p>
        </div>
      </div>

      <div className="form-section">
        {data.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V10C2 11.1 2.9 12 4 12H20C21.1 12 22 11.1 22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 10L12 16L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Aucune formation ajoutée</h3>
            <p>Commencez par ajouter votre première formation académique</p>
            <button
              type="button"
              className="btn btn-primary btn-large"
              onClick={addEducation}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ajouter une formation
            </button>
          </div>
        ) : (
          <>
            {data.map((education, index) => (
              <div key={education.id} className="education-item">
                <div className="education-header">
                  <div className="education-number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="education-title">
                    <h3>Formation {index + 1}</h3>
                    <p>Renseignez les détails de cette formation</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger btn-small"
                    onClick={() => removeEducation(education.id)}
                    title="Supprimer cette formation"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Supprimer
                  </button>
                </div>

                <div className="education-content">
                  <div className="form-row">
                    <div className="form-group half">
                      <label className="required">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Établissement
                      </label>
                      <input
                        type="text"
                        value={education.school || ''}
                        onChange={(e) =>
                          updateEducation(education.id, "school", e.target.value)
                        }
                        placeholder="Ex: Université Paris-Sorbonne"
                        required
                      />
                    </div>
                    <div className="form-group half">
                      <label className="required">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Diplôme
                      </label>
                      <input
                        type="text"
                        value={education.degree || ''}
                        onChange={(e) =>
                          updateEducation(education.id, "degree", e.target.value)
                        }
                        placeholder="Ex: Master, Licence, BTS..."
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Domaine d'études
                      </label>
                      <input
                        type="text"
                        value={education.field || ''}
                        onChange={(e) =>
                          updateEducation(education.id, "field", e.target.value)
                        }
                        placeholder="Ex: Informatique, Marketing, Gestion..."
                      />
                    </div>
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
                        value={education.location || ''}
                        onChange={(e) =>
                          updateEducation(education.id, "location", e.target.value)
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
                        value={education.startDate || ''}
                        onChange={(e) =>
                          updateEducation(education.id, "startDate", e.target.value)
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
                        value={education.endDate || ''}
                        onChange={(e) =>
                          updateEducation(education.id, "endDate", e.target.value)
                        }
                        disabled={education.current}
                      />
                    </div>
                    <div className="form-group third">
                      <div className="checkbox-container">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={education.current || false}
                            onChange={(e) => {
                              updateEducation(education.id, "current", e.target.checked);
                              if (e.target.checked) {
                                updateEducation(education.id, "endDate", "");
                              }
                            }}
                          />
                          <span className="checkmark"></span>
                          <span className="checkbox-text">En cours</span>
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
                      Description / Mentions
                    </label>
                    <textarea
                      value={education.description || ''}
                      onChange={(e) =>
                        updateEducation(education.id, "description", e.target.value)
                      }
                      placeholder="Mentions, projets importants, cours spécialisés, réalisations académiques..."
                      rows="4"
                    />
                    <div className="character-count">
                      {(education.description || '').length}/800 caractères
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="add-education-section">
              <button
                type="button"
                className="btn btn-primary btn-large"
                onClick={addEducation}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ajouter une formation
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
