import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const CVPreview = ({ data }) => {
  const { personalInfo = {}, experiences = [], educations = [], skills = [] } = data;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
  };

  const getLevelStars = (level) => "★".repeat(level) + "☆".repeat(5 - level);

  const downloadPDF = () => {
    const element = document.getElementById("cv-document");
    if (!element) return;

    html2pdf()
      .set({
        margin: 0.5,
        filename: `${personalInfo.fullName || "cv"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save()
      .catch((err) => console.error("Erreur PDF:", err));
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      {/* Bouton Télécharger */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
        <button
          onClick={downloadPDF}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#2563eb',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          <FaDownload /> Télécharger PDF
        </button>
      </div>

      {/* Contenu CV */}
      <div
        id="cv-document"
        style={{
          display: 'flex',
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#fff',
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          fontFamily: 'Arial, sans-serif',
          color: '#111',
        }}
      >
        {/* Colonne gauche */}
        <div style={{ flex: '1', backgroundColor: '#f7f7f7', padding: '2rem', minWidth: '220px', textAlign: 'center' }}>
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt="Photo de profil"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid #2563eb',
                marginBottom: '1rem',
              }}
            />
          )}

          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            {personalInfo.fullName || "Votre Nom"}
          </h2>

          {personalInfo.email && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
              <FaEnvelope /> {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
              <FaPhoneAlt /> {personalInfo.phone}
            </div>
          )}
          {personalInfo.address && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              <FaMapMarkerAlt /> {personalInfo.address}
            </div>
          )}

          {/* Compétences */}
          {skills.length > 0 && (
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', borderBottom: '2px solid #2563eb', paddingBottom: '0.25rem' }}>
                Compétences
              </h3>
              {skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                  <span>{skill.name}</span>
                  <span style={{ color: '#facc15' }}>{getLevelStars(skill.level)}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Colonne droite */}
        <div style={{ flex: '3', padding: '2rem' }}>
          {/* Résumé */}
          {personalInfo.summary && (
            <section style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', borderBottom: '2px solid #2563eb', paddingBottom: '0.25rem' }}>
                Profil
              </h3>
              <p style={{ color: '#555', fontStyle: 'italic', lineHeight: '1.5' }}>{personalInfo.summary}</p>
            </section>
          )}

          {/* Expériences */}
          {experiences.length > 0 && (
            <section style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', borderBottom: '2px solid #2563eb', paddingBottom: '0.25rem' }}>
                Expérience
              </h3>
              {experiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontWeight: '600' }}>{exp.position}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#777' }}>
                      {formatDate(exp.startDate)} - {exp.current ? "Présent" : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <h5 style={{ color: '#555', marginBottom: '0.25rem' }}>{exp.company}</h5>
                  {exp.description && <p style={{ color: '#333', lineHeight: '1.4' }}>{exp.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Formation */}
          {educations.length > 0 && (
            <section>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', borderBottom: '2px solid #2563eb', paddingBottom: '0.25rem' }}>
                Formation
              </h3>
              {educations.map((edu, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontWeight: '600' }}>{edu.degree} {edu.field && `en ${edu.field}`}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#777' }}>
                      {formatDate(edu.startDate)} - {edu.current ? "En cours" : formatDate(edu.endDate)}
                    </span>
                  </div>
                  <h5 style={{ color: '#555', marginBottom: '0.25rem' }}>{edu.school}</h5>
                  {edu.description && <p style={{ color: '#333', lineHeight: '1.4' }}>{edu.description}</p>}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
