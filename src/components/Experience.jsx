import "../styles/Experience.css"

export default function Experience({ data, onUpdate }) {
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
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
    <div className="form-card experience">
      <h2>💼 Expérience Professionnelle</h2>

      {data.length === 0 ? (
        <p className="empty-state">
          Aucune expérience ajoutée. Cliquez sur "Ajouter une expérience" pour
          commencer.
        </p>
      ) : null}

      {data.map((experience, index) => (
        <div key={experience.id} className="experience-item">
          <div className="experience-header">
            <h3>Expérience {index + 1}</h3>
            <button
              type="button"
              className="btn btn-danger btn-small"
              onClick={() => removeExperience(experience.id)}
            >
              🗑️ Supprimer
            </button>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Entreprise *</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) =>
                  updateExperience(experience.id, "company", e.target.value)
                }
                placeholder="Ex: Google France"
                required
              />
            </div>

            <div className="form-group half">
              <label>Poste *</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) =>
                  updateExperience(experience.id, "position", e.target.value)
                }
                placeholder="Ex: Développeur Full Stack"
                required
              />
            </div>
          </div>

          

          <div className="form-row">
            <div className="form-group third">
              <label>Date de début *</label>
              <input
                type="date"
                value={experience.startDate}
                onChange={(e) =>
                  updateExperience(experience.id, "startDate", e.target.value)
                }
                required
              />
            </div>
            <div className="form-group third">
              <label>Date de fin</label>
              <input
                type="date"
                value={experience.endDate}
                onChange={(e) =>
                  updateExperience(experience.id, "endDate", e.target.value)
                }
                disabled={experience.current}
              />
            </div>
            <div className="form-group third checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={experience.current}
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
                Poste actuel
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Description des responsabilités</label>
            <textarea
              value={experience.description}
              onChange={(e) =>
                updateExperience(experience.id, "description", e.target.value)
              }
              placeholder="Décrivez vos principales responsabilités et réalisations dans ce poste..."
              rows="3"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-primary add-btn"
        onClick={addExperience}
      >
        ➕ Ajouter une expérience
      </button>
    </div>
  );
}
