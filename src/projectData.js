import mcmasterSmartScreenshot from './assets/screenshots/mcmaster-smart-screenshot.PNG';
import mcmasterSmartLiteScreenshot from './assets/screenshots/mcmaster-smart-lite-screenshot.PNG';
import inventoryFullStackScreenshot from './assets/screenshots/inventory-client-screenshot.jpeg';
import roundtableScreenshot from './assets/screenshots/roundtable-screenshot.png';
import inventoryScreenshot from './assets/screenshots/inventory-screenshot.png';
import photoTaggingScreenshot from './assets/screenshots/photo-tagging-screenshot.png';
import shoppingCartScreenshot from './assets/screenshots/shopping-cart-screenshot.png';
import battleshipScreenshot from './assets/screenshots/battleship-screenshot.png';
import cvScreenshot from './assets/screenshots/cv-screenshot.png';
import memoryGameScreenshot from './assets/screenshots/memory-game-screenshot.png';
import tennisLauncherScreenshot from './assets/screenshots/ball launcher.jpg';
import weatherAppScreenshot from './assets/screenshots/weather-app-screenshot.png';
import toDoListScreenshot from './assets/screenshots/to-do-list-screenshot.png';
import ticTacToeScreenshot from './assets/screenshots/tic-tac-toe-screenshot.png';

export const projects = [
  {
    name: 'McMaster Smart',
    description:
      'Chrome extension to find cheaper alternatives to McMaster Carr products. Built with Vue & Typescript.',
    github: 'https://github.com/snaeem3/mcmaster-smart',
    screenshotSrc: mcmasterSmartScreenshot,
  },
  {
    name: 'McMaster Smart Lite',
    description:
      'Lightweight, one-click interface chrome extension to find cheaper alternatives to McMaster Carr products. Built with Typescript.',
    github: 'https://github.com/snaeem3/mcmaster-smart-lite',
    screenshotSrc: mcmasterSmartLiteScreenshot,
  },
  {
    name: 'D&D Social Inventory App',
    description:
      'Fullstack MERN app for D&D players to create items, manage their inventory, and track gold.',
    github: 'https://github.com/snaeem3/inventory-client',
    live: 'https://inventory-client-plum.vercel.app/',
    screenshotSrc: inventoryFullStackScreenshot,
  },
  {
    name: 'Roundtable Discord Bot',
    description:
      'Discord Bot built with Typescript and DiscordJS. Play the board game "Roundtable Royale" with friends on your discord server. This bot will manage all the gameplay activities, actions, and scoring for all players.',
    github: 'https://github.com/snaeem3/roundtable-discord-bot',
    live: 'https://github.com/snaeem3/roundtable-discord-bot?tab=readme-ov-file#video-demo',
    screenshotSrc: roundtableScreenshot,
  },
  {
    name: "Where's Waldo Photo Tagging App",
    description:
      'Photo Tagging App built with React & Firebase. Choose a level, then find Waldo and all his friends as fast as you can. Then, submit your name and check where you placed on the leaderboard!',
    github: 'https://github.com/snaeem3/photo-tagging-app',
    live: 'https://snaeem3.github.io/photo-tagging-app/',
    screenshotSrc: photoTaggingScreenshot,
  },
  {
    name: 'D&D Inventory Application',
    description:
      'Backend D&D Inventory App built with NodeJS and MongoDB. Keep your all your D&D items organized by creating/removing items, designating different categories, and tracking your available gold.',
    github: 'https://github.com/snaeem3/inventory-application',
    live: 'https://wandering-brook-1752.fly.dev/catalog',
    screenshotSrc: inventoryScreenshot,
  },
  {
    name: 'Shopping Cart',
    description: 'A mock shopping website built with React and React Testing',
    github: 'https://github.com/snaeem3/shopping-cart',
    live: 'https://snaeem3.github.io/shopping-cart/',
    screenshotSrc: shoppingCartScreenshot,
  },
  {
    name: 'Battleship',
    description:
      'Play a game of battleship against the computer! Built using test-driven development',
    github: 'https://github.com/snaeem3/battleship',
    live: 'https://snaeem3.github.io/battleship/',
    screenshotSrc: battleshipScreenshot,
  },
  {
    name: 'CV Maker',
    description: 'A resume building application built with React',
    github: 'https://github.com/snaeem3/cv-project',
    live: 'https://snaeem3.github.io/cv-project/',
    screenshotSrc: cvScreenshot,
  },
  {
    name: 'Memory Game',
    description:
      'A memory game built with React. Select flags without any repeats to win',
    github: 'https://github.com/snaeem3/memory-game',
    live: 'https://snaeem3.github.io/memory-game/',
    screenshotSrc: memoryGameScreenshot,
  },
  {
    name: 'Automated Tennis Ball Launcher',
    description:
      'A custom designed, built, and programmed tennis ball launcher utilizing an MSP 432 Microcontroller and MATLAB Vision system. Winner of Fall 2017 Georgia Tech Mechatronics Competition.',
    github: 'https://github.com/snaeem3/tennis-ball-launcher',
    live: 'https://youtu.be/vrVyTNxIxno',
    screenshotSrc: tennisLauncherScreenshot,
  },
  {
    name: 'Weather App',
    description:
      'A Javascript application that displays the current weather in a user-specified location using the OpenWeather API',
    github: 'https://github.com/snaeem3/weather-app',
    live: 'https://snaeem3.github.io/weather-app/',
    screenshotSrc: weatherAppScreenshot,
  },
  {
    name: 'To-do List',
    description:
      'A Javascript application to organize and keep track of your personal projects and tasks',
    github: 'https://github.com/snaeem3/To-do-list',
    live: 'https://snaeem3.github.io/To-do-list/',
    screenshotSrc: toDoListScreenshot,
  },
  // {
  //   name: 'Tic-Tac-Toe',
  //   description:
  //     'A Javascript Tic-Tac-Toe game that can be played against another human or the computer',
  //   github: 'https://github.com/snaeem3/tic-tac-toe',
  //   live: 'https://snaeem3.github.io/tic-tac-toe/',
  //   screenshotSrc: ticTacToeScreenshot,
  // },
];
