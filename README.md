# WAR PRIME

## Table of Contents

  - [About this project](#about-this-project)
  - [Key Features](#key-features)
  - [Team Members](#team-members)
  - [How to run this project](#how-to-run-this-project)
    - [Suggested Setup](#suggested-setup)
  - [Screenshot](#screenshot)
  - [Contributing](#contributing)

## About this project
[Back to index](#table-of-contents)

War Prime is an exciting fantasy game set in a captivating world of magic and adventure. Built using the Laravel and Vue.js frameworks, this project showcases the collaborative efforts of five talented individuals, all students of Boolean.

In War Prime, players are immersed in a rich fantasy setting filled with diverse races, including wizards, knights, orcs, and more. They embark on epic quests, engage in thrilling battles, and unravel the mysteries of this enchanting realm.


## (Fake) Key Features
[Back to index](#table-of-contents)

- **Engaging Gameplay**: Experience an immersive gameplay with exciting quests, intense battles, and captivating storylines that keep players hooked.

- **Vibrant Fantasy World**: Explore a meticulously crafted fantasy world, rich in lore and inhabited by a variety of unique and intriguing characters.

- **Character Customization**: Choose from multiple races and classes, each with their own distinct abilities and playstyles, allowing players to create their ideal hero.

- **Strategic Combat**: Engage in strategic and dynamic battles, utilizing a combination of skills, magic, and teamwork to overcome formidable enemies.

- **Quests and Challenges**: Embark on thrilling quests, solve puzzles, and face challenging encounters as you unravel the secrets of War Prime.

## Team Members
[Back to index](#table-of-contents)
- [filecc](https://github.com/filecc)
- [lip-7](https://github.com/Lip-7)
- [nicolozibra1](https://github.com/nicolozibra1)
- [raffaelecapaldo](https://github.com/raffaelecapaldo)
- [totarochristian](https://github.com/totarochristian)



## How to run this project
[Back to index](#table-of-contents)

### Suggested Setup

- VS Code
- MAMP
- PHP >8.1
- Node JS

1. Clone the [Frontend Repo](https://github.com/Lip-7/TheGameFrontEnd)
```sh
gh repo clone Lip-7/TheGameFrontEnd
```
2. Install the required dependencies by running
 ```sh
npm install
```
3. Clone the [Backend Repo](https://github.com/raffaelecapaldo/game-creator)
 ```sh
gh repo clone raffaelecapaldo/game-creator
```
4. Install the required dependencies by running
```sh
composer install
npm install
```
5. Run the MAMP/XAMP Server
6. Create a new Database from PHP My Admin
7. Rename the `.env.example` file in `.env`
8. Fill the ENV variables
```js
DB_DATABASE
DB_USERNAME
DB_PASSWORD
```
9. From the Backend Repo run
```sh
php artisan migrate --seed
```
10. Run all the server
From the Backend
```sh
php artisan serve && npm run dev
```
From the Frontend
```sh
npm run dev
```

Usually:
- Backend Port: 8000
- Backoffice Port: 5173
- Frontend Port: 5174
But  you can eventually customize them in the `app/config/cors.php` file


## Screenshot
[Back to index](#table-of-contents)

Homepage

![Homepage](/screenshots/homepage.png)

Characters List

![Characters List](/screenshots/characters-list.png)

Single Characters

![Single Characters](/screenshots/single-character.png)


## Contributing
[Back to index](#table-of-contents)

We welcome contributions from the community to enhance War Prime. If you have any suggestions, bug fixes, or new features, feel free to submit a pull request.
