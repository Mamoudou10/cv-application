import { useRef } from "react";
import "../styles/PersonalInfo.css"

export default function PersonalInfo({ data = {}, onUpdate }) {
  // Valeurs par défaut si data est undefined ou incomplet
  const personalInfo = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    ...data
  };
  
  const fileInputRef = useRef(null);
  
  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    
    // Validation du fichier
    if (file.size > 5 * 1024 * 1024) { // 5MB max
      alert('Le fichier est trop volumineux. Taille maximum : 5MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => onUpdate({ ...data, photo: reader.result });
    reader.readAsDataURL(file);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...data, [name]: value });
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="personal-info-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h2>Informations Personnelles</h2>
          <p>Renseignez vos coordonnées et votre profil professionnel</p>
        </div>
      </div>
      
      <div className="form-section">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName" className="required">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Nom Complet
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={data.fullName || ''}
              onChange={handleChange}
              placeholder="Ex: Aboubakry Diallo"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="email" className="required">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email || ''}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
              required
            />
          </div>
          <div className="form-group half">
            <label htmlFor="phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2132 21.3521 21.4019C21.1469 21.5906 20.9046 21.7349 20.6407 21.8257C20.3769 21.9165 20.0973 21.9518 19.82 21.93C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.10999 4.18C2.08819 3.90347 2.12352 3.62463 2.21391 3.36121C2.3043 3.09778 2.44771 2.85581 2.63566 2.65062C2.82361 2.44543 3.05189 2.28154 3.30631 2.16937C3.56073 2.0572 3.83588 1.99936 4.11499 2H7.11499C7.59522 1.99522 8.06506 2.16708 8.43945 2.48353C8.81384 2.79999 9.06642 3.23945 9.15499 3.72C9.35099 4.68007 9.63199 5.62273 9.99499 6.54C10.0789 6.74792 10.1071 6.97457 10.0769 7.19671C10.0467 7.41885 9.95905 7.62949 9.82147 7.80882C9.68389 7.98815 9.50099 8.12974 9.28999 8.22L7.82499 8.86C8.91899 11.081 10.939 13.101 13.16 14.195L13.8 12.73C13.8903 12.519 14.0319 12.3361 14.2112 12.1985C14.3906 12.0609 14.6012 11.9733 14.8234 11.9431C15.0455 11.9129 15.2722 11.9411 15.48 12.025C16.3973 12.388 17.3399 12.669 18.3 12.865C18.7862 12.955 19.2316 13.2124 19.5515 13.5928C19.8714 13.9732 20.0447 14.4492 20.04 14.935L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={data.phone || ''}
              onChange={handleChange}
              placeholder="+222 46 98 84 74"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Adresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={data.address || ''}
            onChange={handleChange}
            placeholder="123 Rue de la Paix, 75000 Paris, France"
          />
        </div>

        <div className="form-section">
          <div className="section-subheader">
            <h3>Photo de Profil</h3>
            <p>Ajoutez une photo professionnelle pour personnaliser votre CV</p>
          </div>
          
          <div className="photo-upload-container">
            <div className="photo-preview" onClick={handlePhotoClick}>
              {data.photo ? (
                <img 
                  src={data.photo} 
                  alt="Photo de profil" 
                  className="profile-photo"
                />
              ) : (
                <div className="photo-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Cliquez pour ajouter une photo</span>
                </div>
              )}
            </div>
            
            <div className="photo-upload-info">
              <input 
                ref={fileInputRef} 
                type="file" 
                accept="image/*" 
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
              <button 
                type="button" 
                className="btn btn-secondary btn-small"
                onClick={handlePhotoClick}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Choisir une image
              </button>
              <p className="upload-hint">
                Formats acceptés : JPG, PNG • Taille max : 5MB • Recommandé : 400×400px
              </p>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="summary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Résumé Professionnel
          </label>
          <textarea
            id="summary"
            name="summary"
            value={data.summary || ''}
            onChange={handleChange}
            placeholder="Décrivez brièvement votre profil professionnel, vos compétences clés et vos objectifs de carrière. Ce résumé sera la première impression que les recruteurs auront de vous..."
            rows="5"
          />
          <div className="character-count">
            {(data.summary || '').length}/500 caractères
          </div>
        </div>
      </div>
    </div>
  );
};
