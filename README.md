# 🎨 Démo Git & GitHub : Générateur de CV Interactif

Bienvenue dans cette démo pratique et visuelle de Git et GitHub ! Vous allez créer et personnaliser un CV professionnel en HTML **sans écrire de code** - juste en modifiant des fichiers texte simples. Vous verrez le résultat directement dans votre navigateur !

## 🎯 Ce que vous allez apprendre

- ✅ Les commandes Git essentielles (init, add, commit, status, log)
- ✅ Créer et gérer des branches
- ✅ Fusionner des branches et résoudre des conflits
- ✅ Collaborer sur GitHub (push, pull, pull request)
- ✅ Annuler des erreurs (revert, reset)
- ✅ **Voir l'importance de Git pour éviter de perdre son travail !**

## 📁 Structure du Projet

```
demo_tcc/
├── config.txt          # 📝 Paramètres du CV (nom, email, couleur, etc.)
├── competences.txt     # 🎯 Liste de vos compétences
├── formation.txt       # 🎓 Votre parcours académique
├── experience.txt      # 💼 Votre expérience professionnelle
├── generer_cv.py       # 🔧 Script Python (déjà écrit, ne pas modifier)
└── cv.html            # 📄 CV généré (créé automatiquement)
```

## 🚀 Installation et Préparation

**Prérequis :**
- Git installé
- Python installé
- Un compte GitHub
- Un éditeur de texte (Bloc-notes, Notepad++, VS Code, etc.)

**Étape 0 : Copier le dossier**
Copiez le dossier `demo_tcc` dans votre ordinateur.

---

## 📋 Guide Étape par Étape

### **Étape 1 : Initialiser Git** ⏱️ 2 min

**Ce qu'on fait :** Créer un dépôt Git pour suivre les versions de notre CV.

**Commandes :**
```bash
cd demo_tcc
git init
git status
```

**Ce que vous voyez :**
- Git est initialisé (dossier `.git` créé)
- Tous les fichiers apparaissent en "Untracked files" (non suivis)

**💡 Pourquoi c'est important :** Git crée un "système de sauvegarde" qui va garder l'historique de tous vos changements.

---

### **Étape 2 : Générer et Voir Votre CV** ⏱️ 3 min

**Ce qu'on fait :** Lancer le script pour créer le CV HTML.

**Commandes :**
```bash
python generer_cv.py
```

**Ce que vous voyez :**
- Message "✅ CV généré avec succès : cv.html"
- Un nouveau fichier `cv.html` est créé

**Action :** Ouvrez `cv.html` dans votre navigateur → Vous voyez un beau CV !

**💡 À noter :** Pour l'instant, c'est le CV de "Jean Dupont". Vous allez le personnaliser.

---

### **Étape 3 : Premier Commit (Sauvegarder la Version Initiale)** ⏱️ 2 min

**Ce qu'on fait :** Sauvegarder la version de base dans Git.

**Commandes :**
```bash
git add .
git status
git commit -m "Version initiale du CV"
git log --oneline
```

**Ce que vous voyez :**
- `git add .` : Tous les fichiers passent en vert (prêts à être sauvegardés)
- `git commit` : Création d'un "point de sauvegarde"
- `git log` : Vous voyez votre premier commit dans l'historique

**💡 Pourquoi c'est important :** Vous avez maintenant un point de référence. Si vous cassez quelque chose, vous pouvez revenir ici !

---

### **Étape 4 : Personnaliser Votre CV** ⏱️ 5 min

**Ce qu'on fait :** Modifier les fichiers pour créer VOTRE CV.

**Action :**
1. Ouvrez `config.txt` dans un éditeur
2. Changez les informations :
   ```
   nom=Votre Nom
   titre=Votre Métier
   email=votre@email.com
   telephone=Votre numéro
   ville=Votre Ville
   couleur=vert
   ```
3. Modifiez `competences.txt`, `formation.txt`, `experience.txt` avec vos infos
4. Régénérez le CV : `python generer_cv.py`
5. Rafraîchissez `cv.html` dans le navigateur

**Ce que vous voyez :** Votre CV personnalisé avec vos informations et votre couleur !

**Commandes Git :**
```bash
git status
git diff config.txt
```

**💡 Ce que montre `git diff` :** Git vous montre EXACTEMENT ce qui a changé (en rouge ce qui est supprimé, en vert ce qui est ajouté).

---

### **Étape 5 : Commiter les Changements** ⏱️ 2 min

**Ce qu'on fait :** Sauvegarder votre version personnalisée.

**Commandes :**
```bash
git add .
git commit -m "Personnalisation du CV avec mes informations"
git log --oneline
```

**Ce que vous voyez :** Maintenant vous avez 2 commits dans l'historique !

**💡 Pourquoi c'est important :** Chaque commit est une version sauvegardée. Vous pouvez revenir à n'importe laquelle.

---

### **Étape 6 : Créer une Branche pour Tester** ⏱️ 3 min

**Ce qu'on fait :** Créer une branche pour tester une nouvelle couleur sans toucher à la version principale.

**Commandes :**
```bash
git branch
git branch test-couleur-rouge
git branch
git checkout test-couleur-rouge
git branch
```

**Ce que vous voyez :**
- `git branch` : Liste des branches (au début, juste `main` ou `master`)
- Après création : La branche `test-couleur-rouge` apparaît
- Après `checkout` : L'étoile `*` est maintenant sur `test-couleur-rouge`

**💡 Pourquoi c'est important :** Les branches permettent d'expérimenter sans risque. Si ça ne marche pas, on supprime la branche. Si ça marche, on fusionne !

---

### **Étape 7 : Modifier sur la Branche** ⏱️ 3 min

**Ce qu'on fait :** Changer la couleur en rouge et ajouter une compétence.

**Action :**
1. Dans `config.txt`, changez `couleur=rouge`
2. Dans `competences.txt`, ajoutez `- Gestion de projet`
3. Régénérez : `python generer_cv.py`
4. Regardez dans le navigateur → Le CV est maintenant rouge !

**Commandes :**
```bash
git status
git add .
git commit -m "Test thème rouge et ajout compétence"
git log --oneline
```

**💡 À noter :** Ces changements sont UNIQUEMENT sur la branche `test-couleur-rouge`, pas sur `main` !

---

### **Étape 8 : Comparer les Branches** ⏱️ 2 min

**Ce qu'on fait :** Voir la différence entre les branches.

**Commandes :**
```bash
git checkout main
```

Regardez `cv.html` dans le navigateur → **Le CV est redevenu vert !** (ou votre couleur d'origine)

```bash
git checkout test-couleur-rouge
```

Regardez à nouveau → **Le CV est rouge !**

**💡 Magie de Git :** Vous pouvez basculer entre les versions instantanément. Vos fichiers changent automatiquement !

---

### **Étape 9 : Fusionner la Branche (Merge)** ⏱️ 3 min

**Ce qu'on fait :** Décider que le thème rouge est bien et l'intégrer dans la version principale.

**Commandes :**
```bash
git checkout main
git merge test-couleur-rouge
git log --oneline --graph
```

**Ce que vous voyez :**
- Git fusionne les changements
- Votre `main` a maintenant le thème rouge
- `git log --graph` montre l'historique avec les branches

**💡 Pourquoi c'est important :** Vous avez testé en sécurité, validé, puis intégré. Zéro risque de casser la version principale !

---

### **Étape 10 : Créer un Conflit (Pour Apprendre)** ⏱️ 5 min

**Ce qu'on fait :** Simuler un conflit pour apprendre à le résoudre.

**Action :**
1. Sur `main`, changez `couleur=violet` dans `config.txt`
2. Commitez : `git add config.txt` puis `git commit -m "Changement couleur violet"`
3. Créez une branche : `git branch test-couleur-bleu`
4. Allez sur la branche : `git checkout test-couleur-bleu`
5. Changez `couleur=bleu` dans `config.txt`
6. Commitez : `git add config.txt` puis `git commit -m "Changement couleur bleu"`
7. Retournez sur `main` : `git checkout main`
8. Essayez de fusionner : `git merge test-couleur-bleu`

**Ce que vous voyez :**
```
CONFLICT (content): Merge conflict in config.txt
```

**💡 C'est normal !** Git ne sait pas quelle couleur choisir (violet ou bleu).

---

### **Étape 11 : Résoudre le Conflit** ⏱️ 5 min

**Ce qu'on fait :** Choisir manuellement la bonne version.

**Action :**
1. Ouvrez `config.txt` → Vous voyez :
   ```
   <<<<<<< HEAD
   couleur=violet
   =======
   couleur=bleu
   >>>>>>> test-couleur-bleu
   ```
2. Supprimez les marqueurs et choisissez (ex. : `couleur=bleu`)
3. Sauvegardez le fichier

**Commandes :**
```bash
git status
git add config.txt
git commit -m "Résolution conflit : choix couleur bleu"
git log --oneline --graph
```

**Ce que vous voyez :** Le conflit est résolu, la fusion est terminée !

**💡 Pourquoi c'est important :** Dans le vrai monde, les conflits arrivent quand 2 personnes modifient le même fichier. Git vous aide à les gérer proprement.

---

### **Étape 12 : Partager sur GitHub (Push)** ⏱️ 5 min

**Ce qu'on fait :** Créer un repo sur GitHub et pousser notre CV.

**Action :**
1. Allez sur GitHub → Créez un nouveau repo "mon-cv-demo"
2. NE PAS ajouter de README, .gitignore ou licence
3. Copiez l'URL du repo

**Commandes :**
```bash
git remote add origin https://github.com/VOTRE-USERNAME/mon-cv-demo.git
git branch -M main
git push -u origin main
```

**Ce que vous voyez :**
- Vos fichiers sont maintenant sur GitHub !
- Vous pouvez voir l'historique des commits en ligne

**💡 Pourquoi c'est important :** GitHub est une sauvegarde distante + outil de collaboration. Si votre ordinateur crash, votre travail est sauf !

---

### **Étape 13 : Modifier sur GitHub et Pull** ⏱️ 4 min

**Ce qu'on fait :** Simuler un collègue qui modifie le repo.

**Action :**
1. Sur GitHub, cliquez sur `experience.txt`
2. Cliquez sur l'icône crayon (Edit)
3. Ajoutez une nouvelle expérience
4. Commitez directement sur GitHub

**Commandes (sur votre ordinateur) :**
```bash
git pull origin main
```

**Ce que vous voyez :**
- Git télécharge les changements
- `experience.txt` est mis à jour sur votre machine

**💡 Pourquoi c'est important :** Pull récupère le travail des autres. Essentiel pour la collaboration !

---

### **Étape 14 : Annuler une Erreur (Revert)** ⏱️ 4 min

**Ce qu'on fait :** Simuler une erreur et l'annuler.

**Action :**
1. Dans `config.txt`, changez `afficher_competences=false`
2. Régénérez : `python generer_cv.py`
3. Regardez le CV → Les compétences ont disparu !
4. Commitez : `git add .` puis `git commit -m "Erreur: masquage compétences"`

**Oh non ! On veut annuler :**
```bash
git log --oneline
git revert HEAD
```

**Ce que vous voyez :**
- Git crée un nouveau commit qui annule le précédent
- Les compétences réapparaissent !
- L'historique conserve tout (l'erreur ET l'annulation)

**💡 Pourquoi c'est important :** `git revert` annule proprement sans perdre l'historique. Parfait pour le travail en équipe !

---

### **Étape 15 : Pull Request (Collaboration)** ⏱️ 6 min

**Ce qu'on fait :** Simuler un workflow professionnel.

**Action :**
1. Créez une branche : `git checkout -b ajout-section-projets`
2. Créez un fichier `projets.txt` avec quelques projets
3. Commitez : `git add projets.txt` puis `git commit -m "Ajout section projets"`
4. Poussez la branche : `git push -u origin ajout-section-projets`
5. Sur GitHub → Cliquez "Compare & pull request"
6. Créez la Pull Request avec une description
7. Fusionnez la PR sur GitHub
8. Sur votre machine : `git checkout main` puis `git pull origin main`

**💡 Pourquoi c'est important :** Les Pull Requests permettent de réviser le code avant de l'intégrer. C'est le workflow standard en entreprise !

---

## 🎉 Récapitulatif : Commandes Essentielles

| Commande | Utilité | Quand l'utiliser |
|----------|---------|------------------|
| `git init` | Créer un repo | Une fois au début |
| `git status` | Voir l'état des fichiers | Tout le temps ! |
| `git add .` | Préparer les fichiers | Avant chaque commit |
| `git commit -m "message"` | Sauvegarder une version | Après chaque changement logique |
| `git log --oneline` | Voir l'historique | Pour comprendre ce qui s'est passé |
| `git branch` | Voir/créer branches | Pour organiser le travail |
| `git checkout` | Changer de branche | Pour basculer entre versions |
| `git merge` | Fusionner branches | Quand une fonctionnalité est prête |
| `git push` | Envoyer vers GitHub | Pour sauvegarder en ligne |
| `git pull` | Récupérer de GitHub | Pour obtenir le travail des autres |
| `git revert` | Annuler un commit | Quand on fait une erreur |

---

## 💡 Points Clés à Retenir

✅ **Git sauvegarde l'historique** : Vous ne perdez jamais rien  
✅ **Les branches isolent le travail** : Testez sans risque  
✅ **Commits fréquents** : Créez des points de sauvegarde réguliers  
✅ **GitHub = backup + collaboration** : Travaillez en équipe facilement  
✅ **Les conflits sont normaux** : Git vous aide à les gérer  
✅ **Revert > Supprimer** : Annulez proprement sans perdre l'historique  

---

## 🚀 Pour Aller Plus Loin

**Variantes à tester :**
- Changez `afficher_formation=false` pour masquer la section
- Testez toutes les couleurs (bleu, vert, rouge, violet)
- Ajoutez plus de compétences et expériences
- Créez une branche pour chaque expérimentation

**Workflow recommandé :**
1. Une branche = une fonctionnalité
2. Commitez souvent avec des messages clairs
3. Testez sur la branche avant de merger
4. Pushez sur GitHub régulièrement

---

## ❓ Questions Fréquentes

**Q : Quelle est la différence entre `git revert` et `git reset` ?**  
R : `revert` crée un nouveau commit qui annule (l'historique reste complet). `reset` supprime des commits (dangereux en équipe).

**Q : Pourquoi créer des branches ?**  
R : Pour tester sans risque. Si ça marche, on merge. Sinon, on supprime la branche.

**Q : Je peux travailler sans GitHub ?**  
R : Oui, Git fonctionne en local. Mais GitHub ajoute la sauvegarde distante et la collaboration.

**Q : Comment voir les différences avant de commiter ?**  
R : `git diff` montre ce qui a changé.

---

## 🎯 Mission Finale

Maintenant que vous maîtrisez Git, créez votre VRAI CV :
1. Personnalisez tous les fichiers avec vos vraies informations
2. Créez plusieurs branches pour tester différents thèmes de couleur
3. Choisissez votre préféré et mergez-le
4. Poussez sur GitHub
5. Partagez le lien `index.html` (via GitHub Pages ou autre) !

**Bravo ! Vous savez maintenant utiliser Git et GitHub comme un pro ! 🚀**