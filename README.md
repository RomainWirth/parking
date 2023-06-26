# Application de gestion d'un parking

## Contexte

Ce projet a pour but de créer une application de gestion d'un parking selon plusieurs axes :
* Générer un ticket avec un numéro indiquant à l'utilisateur son numéro de place de parking.
* Laisser la possibilité à l'utilisateur de quitter le parking et libérer sa place.
* Connaître en temps réel le nombre de places disponibles et indisponibles et leur numéro.

Nous partirons dans un premier temps sur un nombre limité de places : 20 places.

## Etapes de création de l'application

1. Mise en place l'environnement de développement :<br> 
Vérification que Node.js soit installé sur la machine.<br> 
On peut installer Create React App en utilisant la commande npx :<br>
```bash
npx create-react-app my-parking-app --template typescript 
``` 
pour créer un projet React avec TypeScript.<br> 
Pour le backend avec NestJS, on peut installer le générateur de NestJS en utilisant la commande :<br> 
```bash
npm install -g @nestjs/cli. 
``` 
On crée ensuite un nouveau projet NestJS en utilisant :
```bash
nest new backend.
``` 

2. Modélisation de la BDD :<br> 
Choix d'une base de données qui correspond aux besoins.<br> 
J'ai choisi une BDD SQLite : open-source et suit la syntaxe sql.
Conception du schéma de base de données en décidant des entités : une table Place et une table Ticket.<br> 
Place contient :
* une Id (clé primaire) 
* un numéro de place (integer not null).<br>
Ticket contient :
* une Id (clé primaire),
* une date de création (datetime not null),
* une date de fin (datetime not null),
* un identifiant de place (integer not null),
* une clé étrangère : identifiant de place faisant référence à la table place(id).

3. Mise en place du backend avec NestJS :<br> 
Utilisation de NestJS pour créer le backend.<br> 
Définition des routes, des contrôleurs et des services nécessaires pour gérer les opérations de gestion de parking.<br> 
(création, la mise à jour et la suppression des places de parking, et des tickets).

4. Développement du frontend avec React :<br> 
Utilisation de React pour créer l'interface utilisateur de l'application.<br> 
Création des composants réutilisables pour afficher les informations des parkings, les détails des véhicules, les formulaires de création/modification, etc.<br> 
Utilisation de Redux pour gérer l'état global de l'application et faciliter la gestion des données entre les différents composants.

5. Connection du frontend et du backend :<br> 
Établissement des appels API depuis le frontend vers le backend pour récupérer et manipuler les données.<br> 
Utilisation des bibliothèques telles que Axios ou Fetch pour effectuer des requêtes HTTP vers l'API NestJS.

## Schéma de données : 
BDD parkingDatabase.sqlite 
