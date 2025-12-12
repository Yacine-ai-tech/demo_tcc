/**
 * Générateur de CV HTML en JavaScript
 */

const fs = require('fs');
const path = require('path');

function lireConfig() {
    /** Lit le fichier de configuration */
    const config = {};
    try {
        const contenu = fs.readFileSync('config.txt', 'utf-8');
        const lignes = contenu.split('\n');
        for (const ligne of lignes) {
            const ligneTrim = ligne.trim();
            if (ligneTrim && !ligneTrim.startsWith('/*') && ligneTrim.includes('=')) {
                const [cle, valeur] = ligneTrim.split('=', 2);
                config[cle] = valeur;
            }
        }
    } catch (error) {
        console.error('Erreur lors de la lecture de config.txt:', error.message);
    }
    return config;
}

function lireFichier(nomFichier) {
    /** Lit un fichier texte et retourne son contenu */
    try {
        return fs.readFileSync(nomFichier, 'utf-8').trim();
    } catch (error) {
        return '';
    }
}

function genererHtml(config) {
    /** Génère le code HTML du CV */

    // Définir les couleurs selon le thème choisi
    const couleurs = {
        'bleu': '#2c3e50',
        'vert': '#27ae60',
        'rouge': '#c0392b',
        'violet': '#8e44ad'
    };

    const couleurTheme = couleurs[config.couleur] || '#2c3e50';

    // Lire les sections
    const competences = lireFichier('competences.txt');
    const formation = lireFichier('formation.txt');
    const experience = lireFichier('experience.txt');

    let html = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - ${config.nom || 'Mon CV'}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            min-height: 100vh;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 10px 50px rgba(0,0,0,0.3);
            border-radius: 10px;
            overflow: hidden;
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .header {
            background: ${couleurTheme};
            color: white;
            padding: 40px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .header h2 {
            font-size: 1.5em;
            font-weight: 300;
            opacity: 0.9;
        }

        .contact {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            margin-top: 20px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .content {
            padding: 40px;
        }

        .section {
            margin-bottom: 35px;
        }

        .section h3 {
            color: ${couleurTheme};
            font-size: 1.8em;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid ${couleurTheme};
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .competences {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }

        .competence-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid ${couleurTheme};
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .competence-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .formation-item, .experience-item {
            background: #f8f9fa;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 8px;
            border-left: 4px solid ${couleurTheme};
            line-height: 1.8;
        }

        .experience-item ul {
            margin-left: 20px;
            margin-top: 10px;
        }

        .footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 0.9em;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2em;
            }
            .contact {
                flex-direction: column;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${config.nom || 'Votre Nom'}</h1>
            <h2>${config.titre || 'Votre Titre'}</h2>
            <div class="contact">
                <div class="contact-item">
                    <span>📧</span>
                    <span>${config.email || 'email@example.com'}</span>
                </div>
                <div class="contact-item">
                    <span>📱</span>
                    <span>${config.telephone || '+33 X XX XX XX XX'}</span>
                </div>
                <div class="contact-item">
                    <span>📍</span>
                    <span>${config.ville || 'Votre Ville'}</span>
                </div>
            </div>
        </div>

        <div class="content">
`;

    // Section Expérience (toujours affichée)
    if (experience) {
        html += `
            <div class="section">
                <h3>💼 Expérience Professionnelle</h3>
`;
        const exps = experience.split('\n\n');
        for (const exp of exps) {
            if (exp.trim()) {
                html += `
                <div class="experience-item">
                    ${exp.replace(/\n/g, '<br>')}
                </div>
`;
            }
        }
        html += `
            </div>
`;
    }

    // Section Compétences (conditionnelle)
    if ((config.afficher_competences || 'true') === 'true' && competences) {
        html += `
            <div class="section">
                <h3>🎯 Compétences</h3>
                <div class="competences">
`;
        const comps = competences.split('\n');
        for (const comp of comps) {
            if (comp.trim()) {
                html += `
                    <div class="competence-item">
                        ${comp.trim()}
                    </div>
`;
            }
        }
        html += `
                </div>
            </div>
`;
    }

    // Section Formation (conditionnelle)
    if ((config.afficher_formation || 'true') === 'true' && formation) {
        html += `
            <div class="section">
                <h3>🎓 Formation</h3>
`;
        const forms = formation.split('\n');
        for (const form of forms) {
            if (form.trim()) {
                html += `
                <div class="formation-item">
                    ${form.trim()}
                </div>
`;
            }
        }
        html += `
            </div>
`;
    }

    html += `
        </div>

        <div class="footer">
            <p>CV généré avec Git & GitHub 🚀 | Dernière mise à jour : ${config.nom || 'Nom'}</p>
        </div>
    </div>
</body>
</html>
`;

    return html;
}

function main() {
    /** Fonction principale */
    console.log("🎨 Génération de votre CV...");

    // Lire la configuration
    const config = lireConfig();

    // Générer le HTML
    const html = genererHtml(config);

    // Sauvegarder dans un fichier
    try {
        fs.writeFileSync('index.html', html, 'utf-8');
        console.log("✅ CV généré avec succès : index.html");
        console.log(`👤 Nom : ${config.nom || 'Non défini'}`);
        console.log(`🎨 Thème : ${config.couleur || 'bleu'}`);
        console.log("\n💡 Ouvrez cv.html dans votre navigateur pour voir le résultat !");
    } catch (error) {
        console.error('Erreur lors de l\'écriture du fichier cv.html:', error.message);
    }
}

// Exécuter si appelé directement
if (require.main === module) {
    main();
}

module.exports = { lireConfig, lireFichier, genererHtml, main };