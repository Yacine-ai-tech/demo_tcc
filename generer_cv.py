
"""
Générateur de CV HTML
"""

def lire_config():
    """Lit le fichier de configuration"""
    config = {}
    with open('config.txt', 'r', encoding='utf-8') as f:
        for ligne in f:
            ligne = ligne.strip()
            if ligne and not ligne.startswith('/*') and '=' in ligne:
                cle, valeur = ligne.split('=', 1)
                config[cle] = valeur
    return config

def lire_fichier(nom_fichier):
    """Lit un fichier texte et retourne son contenu"""
    try:
        with open(nom_fichier, 'r', encoding='utf-8') as f:
            return f.read().strip()
    except FileNotFoundError:
        return ""

def generer_html(config):
    """Génère le code HTML du CV"""
    
    # Définir les couleurs selon le thème choisi
    couleurs = {
        'bleu': '#2c3e50',
        'vert': '#27ae60',
        'rouge': '#c0392b',
        'violet': '#8e44ad'
    }
    
    couleur_theme = couleurs.get(config.get('couleur', 'bleu'), '#2c3e50')
    
    # Lire les sections
    competences = lire_fichier('competences.txt')
    formation = lire_fichier('formation.txt')
    experience = lire_fichier('experience.txt')
    
    html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - {config.get('nom', 'Mon CV')}</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            min-height: 100vh;
        }}
        
        .container {{
            max-width: 900px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 10px 50px rgba(0,0,0,0.3);
            border-radius: 10px;
            overflow: hidden;
            animation: slideIn 0.5s ease-out;
        }}
        
        @keyframes slideIn {{
            from {{
                opacity: 0;
                transform: translateY(-20px);
            }}
            to {{
                opacity: 1;
                transform: translateY(0);
            }}
        }}
        
        .header {{
            background: {couleur_theme};
            color: white;
            padding: 40px;
            text-align: center;
        }}
        
        .header h1 {{
            font-size: 2.5em;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }}
        
        .header h2 {{
            font-size: 1.5em;
            font-weight: 300;
            opacity: 0.9;
        }}
        
        .contact {{
            background: rgba(255,255,255,0.1);
            padding: 20px;
            margin-top: 20px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }}
        
        .contact-item {{
            display: flex;
            align-items: center;
            gap: 8px;
        }}
        
        .content {{
            padding: 40px;
        }}
        
        .section {{
            margin-bottom: 35px;
        }}
        
        .section h3 {{
            color: {couleur_theme};
            font-size: 1.8em;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid {couleur_theme};
            text-transform: uppercase;
            letter-spacing: 1px;
        }}
        
        .competences {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }}
        
        .competence-item {{
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid {couleur_theme};
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }}
        
        .competence-item:hover {{
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }}
        
        .formation-item, .experience-item {{
            background: #f8f9fa;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 8px;
            border-left: 4px solid {couleur_theme};
            line-height: 1.8;
        }}
        
        .experience-item ul {{
            margin-left: 20px;
            margin-top: 10px;
        }}
        
        .footer {{
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 0.9em;
        }}
        
        @media (max-width: 768px) {{
            .header h1 {{
                font-size: 2em;
            }}
            .contact {{
                flex-direction: column;
                gap: 10px;
            }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{config.get('nom', 'Votre Nom')}</h1>
            <h2>{config.get('titre', 'Votre Titre')}</h2>
            <div class="contact">
                <div class="contact-item">
                    <span>📧</span>
                    <span>{config.get('email', 'email@example.com')}</span>
                </div>
                <div class="contact-item">
                    <span>📱</span>
                    <span>{config.get('telephone', '+33 X XX XX XX XX')}</span>
                </div>
                <div class="contact-item">
                    <span>📍</span>
                    <span>{config.get('ville', 'Votre Ville')}</span>
                </div>
            </div>
        </div>
        
        <div class="content">
"""
    
    # Section Expérience (toujours affichée)
    if experience:
        html += f"""
            <div class="section">
                <h3>💼 Expérience Professionnelle</h3>
"""
        for exp in experience.split('\n\n'):
            if exp.strip():
                html += f"""
                <div class="experience-item">
                    {exp.replace(chr(10), '<br>')}
                </div>
"""
        html += """
            </div>
"""
    
    # Section Compétences (conditionnelle)
    if config.get('afficher_competences', 'true') == 'true' and competences:
        html += f"""
            <div class="section">
                <h3>🎯 Compétences</h3>
                <div class="competences">
"""
        for comp in competences.split('\n'):
            if comp.strip():
                html += f"""
                    <div class="competence-item">
                        {comp.strip()}
                    </div>
"""
        html += """
                </div>
            </div>
"""
    
    # Section Formation (conditionnelle)
    if config.get('afficher_formation', 'true') == 'true' and formation:
        html += f"""
            <div class="section">
                <h3>🎓 Formation</h3>
"""
        for form in formation.split('\n'):
            if form.strip():
                html += f"""
                <div class="formation-item">
                    {form.strip()}
                </div>
"""
        html += """
            </div>
"""
    
    html += """
        </div>
        
        <div class="footer">
            <p>CV généré avec Git & GitHub 🚀 | Dernière mise à jour : """ + config.get('nom', 'Nom') + """</p>
        </div>
    </div>
</body>
</html>
"""
    
    return html

def main():
    """Fonction principale"""
    print("🎨 Génération de votre CV...")
    
    # Lire la configuration
    config = lire_config()
    
    # Générer le HTML
    html = generer_html(config)
    
    # Sauvegarder dans un fichier
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    print("✅ CV généré avec succès : index.html")
    print(f"👤 Nom : {config.get('nom', 'Non défini')}")
    print(f"🎨 Thème : {config.get('couleur', 'bleu')}")
    print("\n💡 Ouvrez cv.html dans votre navigateur pour voir le résultat !")

if __name__ == "__main__":
    main()