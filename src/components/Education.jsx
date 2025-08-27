import "../styles/Education.css";

export default function Education({ data = [], onUpdate }) {
  const addEducation = () => {
    const newEdication = {
      id: Date.now(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    onUpdate([...data, newEdication]);
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
    <div className="form-card education">
      <h2>🎓 Formation</h2>

      {data.length === 0 ? (
        <p className="empty-state">
          Aucune formation ajoutée. Cliquez sur "Ajouter une formation" pour
          commencer.
        </p>
      ) : null}

      {data.map((education, index) => (
        <div key={education.id} className="education-item">
          <div className="education-header">
            <h3>Formation {index + 1}</h3>
            <button
              type="button"
              className="btn btn-danger btn-small"
              onClick={() => removeEducation(education.id)}
            >
              🗑️ Supprimer
            </button>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Établissement *</label>
              <input
                type="text"
                value={education.school}
                onChange={(e) =>
                  updateEducation(education.id, "school", e.target.value)
                }
                placeholder="Ex: Université Paris-Sorbonne"
                required
              />
            </div>
            <div className="form-group half">
              <label>Diplôme *</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) =>
                  updateEducation(education.id, "degree", e.target.value)
                }
                placeholder="Ex: Master, Licence, BTS..."
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Domaine d'études</label>
            <input
              type="text"
              value={education.field}
              onChange={(e) =>
                updateEducation(education.id, "field", e.target.value)
              }
              placeholder="Ex: Informatique, Marketing, Gestion..."
            />
          </div>

          <div className="form-row">
            <div className="form-group third">
              <label>Date de début *</label>
              <input
                type="date"
                value={education.startDate}
                onChange={(e) =>
                  updateEducation(education.id, "startDate", e.target.value)
                }
                required
              />
            </div>
            <div className="form-group third">
              <label>Date de fin</label>
              <input
                type="date"
                value={education.endDate}
                onChange={(e) =>
                  updateEducation(education.id, "endDate", e.target.value)
                }
                disabled={education.current}
              />
            </div>
            <div className="form-group third checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={education.current}
                  onChange={(e) => {
                    updateEducation(education.id, "current", e.target.checked);
                    if (e.target.checked) {
                      updateEducation(education.id, "endDate", "");
                    }
                  }}
                />
                En cours
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Description / Mentions</label>
            <textarea
              value={education.description}
              onChange={(e) =>
                updateEducation(education.id, "description", e.target.value)
              }
              placeholder="Mentions, projets importants, cours spécialisés..."
              rows="2"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-primary add-btn"
        onClick={addEducation}
      >
        ➕ Ajouter une formation
      </button>
    </div>
  );
}
