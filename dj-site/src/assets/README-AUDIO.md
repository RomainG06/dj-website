# 🎵 Instructions pour ajouter votre fichier audio

## Étape 1 : Ajoutez votre fichier MP3

1. Placez votre fichier MP3 dans ce dossier (`src/assets/`)
2. Renommez-le en `dj-mix.mp3` (ou gardez le nom que vous voulez)

## Étape 2 : Activez l'import dans Navbar.tsx

Ouvrez le fichier `src/components/Navbar.tsx` et :

1. **Ligne 3-4** : Décommentez l'import :
   ```tsx
   // Remplacez ceci :
   // import audioTrack from '../assets/dj-mix.mp3';
   
   // Par ceci :
   import audioTrack from '../assets/dj-mix.mp3';
   ```
   (Ajustez le nom du fichier si nécessaire)

2. **Ligne ~60** : Décommentez la source audio dans l'élément `<audio>` :
   ```tsx
   // Remplacez ceci :
   {/* <source src={audioTrack} type="audio/mpeg" /> */}
   
   // Par ceci :
   <source src={audioTrack} type="audio/mpeg" />
   ```

## Étape 3 : Testez !

1. Sauvegardez les fichiers
2. Rechargez le navigateur
3. Le logo devrait tourner automatiquement avec la musique
4. Cliquez dessus pour mettre en pause/reprendre

## 🎛️ Fonctionnalités

✅ **Autoplay automatique** au chargement (si le navigateur le permet)  
✅ **Rotation du logo** pendant la lecture  
✅ **Lecture en boucle** infinie  
✅ **Clic sur le logo** pour play/pause  

## ⚠️ Note sur l'autoplay

Les navigateurs modernes bloquent souvent l'autoplay par défaut. Si la musique ne démarre pas automatiquement, c'est normal ! L'utilisateur devra cliquer sur le logo pour démarrer.

---

**Format recommandé :** MP3 (meilleure compatibilité)  
**Qualité suggérée :** 128-192 kbps (bon compromis qualité/poids)
