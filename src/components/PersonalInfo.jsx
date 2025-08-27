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
    const reader = new FileReader();
    reader.onload = () => onUpdate({ ...data, photo: reader.result });
    reader.readAsDataURL(file);
  };
    const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...data, [name]: value });
};
 return (
    <div className="form-card personal-info">
      <h2>📋 Informations Personnelles</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Nom Complet *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            placeholder="Ex: Aboubakry Diallo"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label>Photo de profil</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {data.photo ? (
              <img src={data.photo} alt="Profil" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
            ) : null}
            <div>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} />
            </div>
          </div>
          <small style={{ color: '#6b7280' }}>PNG/JPG, carré recommandé, ~120×120.</small>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="amd@email.com"
            required
          />
        </div>
        <div className="form-group half">
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="+222 46 98 84 74"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Adresse</label>
        <input
          type="text"
          id="address"
          name="address"
          value={data.address}
          onChange={handleChange}
          placeholder="123 Rue de la Paix, 75000 Paris, France"
        />
      </div>

      <div className="form-group">
        <label htmlFor="summary">Résumé Professionnel</label>
        <textarea
          id="summary"
          name="summary"
          value={data.summary}
          onChange={handleChange}
          placeholder="Décrivez brièvement votre profil professionnel, vos compétences clés et vos objectifs de carrière..."
          rows="4"
        />
      </div>
    </div>
  );
};
