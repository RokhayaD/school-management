# Application de Gestion Scolaire

## Introduction
Ceci est une application Angular simple pour gérer les classes et les étudiants du Lycée d'Excellence de Dakar.

## Fonctionnalités
- Ajouter, mettre à jour, supprimer des classes.
- Ajouter, mettre à jour, supprimer des étudiants.
- Lister toutes les classes et tous les étudiants.

## Prérequis
- Node.js et npm doivent être installés sur votre machine. Vous pouvez les télécharger depuis [nodejs.org](https://nodejs.org/).

Ce projet a été généré avec Angular CLI version 17.3.7.

## Serveur de développement
Exécutez 'ng serve' pour lancer un serveur de développement. Accédez à http://localhost:4200/. L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

## Génération de code
Exécutez 'ng generate component component-name' pour générer un nouveau composant. Vous pouvez également utiliser ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build
Exécutez 'ng build' pour construire le projet. Les fichiers de construction seront stockés dans le répertoire dist/.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Exécution des tests de bout en bout
Exécutez 'ng e2e' pour exécuter les tests de bout en bout via une plateforme de votre choix. Pour utiliser cette commande, vous devez d'abord ajouter un package qui implémente les fonctionnalités de test de bout en bout.

## Aide supplémentaire

Pour obtenir plus d'aide sur Angular CLI, utilisez ng help ou consultez la page Vue d'ensemble et référence des commandes Angular CLI.

src/
├── app/
│   ├── components/
│   │   ├── class-management/
│   │   │   ├── class-management.component.html
│   │   │   ├── class-management.component.ts
│   │   ├── student-management/
│   │   │   ├── student-management.component.html
│   │   │   ├── student-management.component.ts
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
├── assets/
├── environments/
├── index.html
├── main.ts
└── styles.css
