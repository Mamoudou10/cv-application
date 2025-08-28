## Générateur de CV (React + Vite)

Application React pour créer un CV moderne pas à pas et l’exporter en PDF.

### Fonctionnalités
- **Étapes guidées**: `Informations`, `Expérience`, `Formation`, `Compétences`, `Aperçu`.
- **Compétences organisées**: Techniques, Soft Skills et **Langues** (nouvelle section dans l’aperçu).
- **Aperçu en temps réel** avec mise en page soignée.
- **Export PDF** via `html2pdf.js`.
- **Sauvegarde automatique** dans `localStorage`.

### Prérequis
- Node.js 18+ recommandé

### Installation
```bash
npm install
```

### Scripts
- **Démarrer en dev**: `npm run dev`
- **Build de production**: `npm run build`
- **Prévisualiser le build**: `npm run preview`

### Utilisation
1. Lancez le serveur de dev: `npm run dev` puis ouvrez l’URL indiquée.
2. Remplissez chaque étape du formulaire.
3. Dans `Compétences`, ajoutez vos compétences et choisissez la **catégorie**:
   - `Technique`
   - `Soft Skills`
   - `Langues` (pour vos langues et niveaux)
4. Allez à l’onglet `Aperçu` pour voir le rendu final.
5. Cliquez sur "Télécharger PDF" pour exporter votre CV.

### Section Langues (aperçu)
- Les compétences ajoutées avec la catégorie `Langues` s’affichent automatiquement dans une section dédiée intitulée **Langues** dans l’aperçu, séparée des autres compétences.

### Stack technique
- React, Vite
- `html2pdf.js` pour l’export PDF
- `react-icons` pour les icônes

### Structure du projet (extrait)
```
src/
  App.jsx
  components/
    PersonalInfo.jsx
    Experience.jsx
    Education.jsx
    Skills.jsx
    CVPreview.jsx
  styles/
```

### Licence
Projet à usage éducatif. Adaptez librement selon vos besoins.
