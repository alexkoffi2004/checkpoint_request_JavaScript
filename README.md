# 🌤️ Application Météo en JavaScript

Bienvenue dans mon projet d'application météo !  
Cette application permet à l'utilisateur de **saisir le nom d'une ville** pour obtenir les **informations météorologiques en temps réel** : température, description, heure du lever et coucher du soleil, et une **icône météo dynamique**.  
Le fond change automatiquement en fonction des conditions météo actuelles ☁️❄️🌞🌧️

---

## 📁 Structure du projet

Le projet contient 3 fichiers principaux :

checkpoint_request_JavaScript/ 
│ 
├── index.html ← Structure de la page 
├── styles.css ← Mise en forme
└── script.js ← Logique JavaScript + appel à l'API


---

## ⚙️ Fonctionnalités

- ✅ Rechercher une ville et afficher sa météo en direct
- ✅ Affichage de la température, de la description météo
- ✅ Heure du lever et coucher du soleil (format local)
- ✅ Icône météo via l’API OpenWeatherMap
- ✅ Fond dynamique selon la météo (ensoleillé, pluie, neige...)

---

## 🚀 Installation et utilisation

1. **Cloner le projet ou télécharger les fichiers** :

   - git clone https://github.com/alexkoffi2004/checkpoint_request_JavaScript.git
   - cd checkpoint_request_JavaScript

2. **Ouvre index.html dans ton navigateur**
- (Pas besoin de serveur, le fichier s’ouvre localement)

3. **Entre une ville dans le champ de recherche et clique sur "Rechercher"**

# 🔑 Clé API OpenWeatherMap
- Cette application utilise l’API gratuite de `OpenWeatherMap`.

**Étapes pour obtenir ta clé :**
1. Crée un compte sur `https://openweathermap.org/api`

2. Va dans ton profil → "API Keys"

3. Copie la clé fournie

4. Dans script.js, remplace la ligne suivante :
    - `const apiKey = 'TA_CLE_API_ICI';` // Remplace par ta propre clé

---

# ✨ Aperçu visuel

## 🎨 Police utilisée
'Quicksand', sans-serif, lisible et adaptée aux applications météo
**insert ce lien dans le head de ton html :**
- <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet">

---

# 📦 Améliorations possibles
 - Affichage météo sur plusieurs jours (prévisions)

 - Mode sombre

 - Ajout de la géolocalisation automatique

 - Historique des recherches

 ---

 # 🧑‍💻 Auteur
**Développé par Kouadio Jean Alex Koffi**
- 💼 Fullstack Developer | **Passionné par les interfaces simples et fonctionnelles**
- 📧 koffijeanalexkoffi@gmail.com

## 📝 Licence
**Ce projet est libre d’utilisation à des fins éducatives ou personnelles.**