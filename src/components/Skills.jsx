import '../styles/Skills.css';
import { useState } from 'react';

const Skills = ({ data = [], onUpdate }) => {
  const [newSkill, setNewSkill] = useState({ name: '', level: 3, category: 'technical' });

  const addSkill = () => {
    if (newSkill.name.trim()) {
      const skill = {
        id: Date.now(),
        name: newSkill.name.trim(),
        level: parseInt(newSkill.level),
        category: newSkill.category
      };
      onUpdate([...data, skill]);
      setNewSkill({ name: '', level: 3, category: 'technical' });
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
      1: '#ef4444',
      2: '#f59e0b',
      3: '#eab308',
      4: '#10b981',
      5: '#059669'
    };
    return colors[level] || '#eab308';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      technical: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      soft: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      language: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return icons[category] || icons.technical;
  };

  const getCategoryLabel = (category) => {
    const labels = {
      technical: 'Technique',
      soft: 'Soft Skills',
      language: 'Langues'
    };
    return labels[category] || 'Technique';
  };

  const groupedSkills = data.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h2>Compétences & Expertises</h2>
          <p>Ajoutez vos compétences techniques, soft skills et langues</p>
        </div>
      </div>

      <div className="form-section">
        <div className="add-skill-section">
          <div className="section-subheader">
            <h3>Ajouter une compétence</h3>
            <p>Renseignez vos compétences et leur niveau de maîtrise</p>
          </div>
          
          <div className="add-skill-form">
            <div className="form-row">
              <div className="form-group">
                <label>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Nom de la compétence
                </label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  onKeyPress={handleKeyPress}
                  placeholder="Ex: JavaScript, Leadership, Anglais..."
                />
              </div>
              <div className="form-group third">
                <label>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Catégorie
                </label>
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                >
                  <option value="technical">Technique</option>
                  <option value="soft">Soft Skills</option>
                  <option value="language">Langues</option>
                </select>
              </div>
              <div className="form-group third">
                <label>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Niveau
                </label>
                <select
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                >
                  <option value={1}>Débutant</option>
                  <option value={2}>Intermédiaire</option>
                  <option value={3}>Bon niveau</option>
                  <option value={4}>Avancé</option>
                  <option value={5}>Expert</option>
                </select>
              </div>
            </div>
            
            <button 
              type="button"
              className="btn btn-primary btn-large"
              onClick={addSkill}
              disabled={!newSkill.name.trim()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ajouter la compétence
            </button>
          </div>
        </div>

        {data.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Aucune compétence ajoutée</h3>
            <p>Commencez par ajouter vos premières compétences</p>
          </div>
        ) : (
          <div className="skills-display">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="skills-category">
                <div className="category-header">
                  <div className="category-icon">
                    {getCategoryIcon(category)}
                  </div>
                  <h3>{getCategoryLabel(category)}</h3>
                  <span className="skill-count">{skills.length} compétence{skills.length > 1 ? 's' : ''}</span>
                </div>
                
                <div className="skills-list">
                  {skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                        <div className="skill-level-container">
                          <select
                            value={skill.level}
                            onChange={(e) => updateSkillLevel(skill.id, e.target.value)}
                            className="skill-level-select"
                          >
                            <option value={1}>Débutant</option>
                            <option value={2}>Intermédiaire</option>
                            <option value={3}>Bon niveau</option>
                            <option value={4}>Avancé</option>
                            <option value={5}>Expert</option>
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
                                backgroundColor: level <= skill.level ? getLevelColor(skill.level) : 'var(--border)'
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
                        title="Supprimer cette compétence"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;