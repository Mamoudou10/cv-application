import '../styles/Skills.css';
import { useState } from 'react';

const Skills = ({ data = [], onUpdate }) => {
  const [newSkill, setNewSkill] = useState({ name: '', level: 3 });

  const addSkill = () => {
    if (newSkill.name.trim()) {
      const skill = {
        id: Date.now(),
        name: newSkill.name.trim(),
        level: parseInt(newSkill.level)
      };
      onUpdate([...data, skill]);
      setNewSkill({ name: '', level: 3 });
    }
  };

  const removeSkill = (id) => {
    onUpdate(data.filter(skill => skill.id !== id));
  };

  const updateSkillLevel = (id, level) => {
    onUpdate(data.map(skill => 
      skill.id === id ? { ...skill, level: parseInt(level) } : skill
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addSkill();
    }
  };

  const getLevelText = (level) => {
    const levels = {
      1: 'Débutant',
      2: 'Intermédiaire',
      3: 'Bon niveau',
      4: 'Avancé',
      5: 'Expert'
    };
    return levels[level] || 'Bon niveau';
  };

  const getLevelColor = (level) => {
    const colors = {
      1: '#e74c3c',
      2: '#f39c12',
      3: '#f1c40f',
      4: '#27ae60',
      5: '#2ecc71'
    };
    return colors[level] || '#f1c40f';
  };

  return (
    <div className="form-card skills">
      <h2>🛠️ Compétences</h2>
      
      <div className="add-skill-section">
        <div className="form-row">
          <div className="form-group">
            <label>Nouvelle compétence</label>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              onKeyPress={handleKeyPress}
              placeholder="Ex: JavaScript, Photoshop, Gestion d'équipe..."
            />
          </div>
          <div className="form-group level-group">
            <label>Niveau</label>
            <select
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
            >
              <option value={1}>⭐ Débutant</option>
              <option value={2}>⭐⭐ Intermédiaire</option>
              <option value={3}>⭐⭐⭐ Bon niveau</option>
              <option value={4}>⭐⭐⭐⭐ Avancé</option>
              <option value={5}>⭐⭐⭐⭐⭐ Expert</option>
            </select>
          </div>
        </div>
        
        <button 
          type="button"
          className="btn btn-primary add-skill-btn"
          onClick={addSkill}
          disabled={!newSkill.name.trim()}
        >
          ➕ Ajouter
        </button>
      </div>

      {data.length === 0 ? (
        <p className="empty-state">Aucune compétence ajoutée. Ajoutez vos compétences techniques et soft skills.</p>
      ) : (
        <div className="skills-list">
          {data.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-info">
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-level-container">
                  <select
                    value={skill.level}
                    onChange={(e) => updateSkillLevel(skill.id, e.target.value)}
                    className="skill-level-select"
                  >
                    <option value={1}>⭐ Débutant</option>
                    <option value={2}>⭐⭐ Intermédiaire</option>
                    <option value={3}>⭐⭐⭐ Bon niveau</option>
                    <option value={4}>⭐⭐⭐⭐ Avancé</option>
                    <option value={5}>⭐⭐⭐⭐⭐ Expert</option>
                  </select>
                </div>
              </div>
              
              <div className="skill-visual">
                <div className="skill-bars">
                  {[1, 2, 3, 4, 5].map(level => (
                    <div
                      key={level}
                      className={`skill-bar ${level <= skill.level ? 'active' : ''}`}
                      style={{ 
                        backgroundColor: level <= skill.level ? getLevelColor(skill.level) : '#e9ecef'
                      }}
                    />
                  ))}
                </div>
                <span className="skill-level-text">{getLevelText(skill.level)}</span>
              </div>
              
              <button 
                type="button"
                className="btn btn-danger btn-small remove-skill-btn"
                onClick={() => removeSkill(skill.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;