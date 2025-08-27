import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import "../styles/CVPreview.css";

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
        margin: 0.4,
        filename: `${personalInfo.fullName || "cv"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true, scrollY: 0 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save()
      .catch((err) => console.error("Erreur PDF:", err));
  };

  return (
    <div className="cv-preview">
      <div className="cv-actions">
        <button onClick={downloadPDF} className="btn btn-primary download-btn">
          <FaDownload /> Télécharger PDF
        </button>
      </div>

      <div id="cv-document" className="cv-document">
        <header className="cv-header">
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt="Photo de profil"
              style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '2px solid #004aad', marginBottom: 12 }}
            />
          )}
          <h1 className="cv-name">{personalInfo.fullName || "Votre Nom"}</h1>
          <div className="cv-contact">
            {personalInfo.email && (
              <div className="contact-item"><FaEnvelope className="contact-icon" />{personalInfo.email}</div>
            )}
            {personalInfo.phone && (
              <div className="contact-item"><FaPhoneAlt className="contact-icon" />{personalInfo.phone}</div>
            )}
            {personalInfo.address && (
              <div className="contact-item"><FaMapMarkerAlt className="contact-icon" />{personalInfo.address}</div>
            )}
          </div>
        </header>

        {personalInfo.summary && (
          <section className="cv-section">
            <h2 className="cv-section-title">Profil</h2>
            <p className="cv-summary">{personalInfo.summary}</p>
          </section>
        )}

        {experiences.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">Expérience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="cv-experience-item">
                <div className="cv-experience-header">
                  <span className="cv-experience-position">{exp.position}</span>
                  <span className="cv-experience-dates">{formatDate(exp.startDate)} - {exp.current ? "Présent" : formatDate(exp.endDate)}</span>
                </div>
                <div className="cv-experience-company">{exp.company}</div>
                {exp.description && <div className="cv-experience-description">{exp.description}</div>}
              </div>
            ))}
          </section>
        )}

        {educations.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">Formation</h2>
            {educations.map((edu, index) => (
              <div key={index} className="cv-education-item">
                <div className="cv-education-header">
                  <span className="cv-education-degree">{edu.degree} {edu.field && `en ${edu.field}`}</span>
                  <span className="cv-education-dates">{formatDate(edu.startDate)} - {edu.current ? "En cours" : formatDate(edu.endDate)}</span>
                </div>
                <div className="cv-education-school">{edu.school}</div>
                {edu.description && <div className="cv-education-description">{edu.description}</div>}
              </div>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">Compétences</h2>
            <div className="cv-skills">
              {skills.map((skill, index) => (
                <div key={index} className="cv-skill-item">
                  <span className="cv-skill-name">{skill.name}</span>
                  <span className="cv-skill-level">{getLevelStars(skill.level)}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CVPreview;
