import photoTaggingScreenshot from './assets/screenshots/photo-tagging-screenshot.png';
import shoppingCartScreenshot from './assets/screenshots/shopping-cart-screenshot.png';
import battleshipScreenshot from './assets/screenshots/battleship-screenshot.png';
import cvScreenshot from './assets/screenshots/cv-screenshot.png';

export const projects = [
  {
    name: "Where's Waldo Photo Tagging App",
    description:
      'Photo Tagging App built with React & Firebase. Choose a level, then find Waldo and all his friends as fast as you can. Then, submit your name and check where you placed on the leaderboard!',
    github: 'https://github.com/snaeem3/photo-tagging-app',
    live: 'https://snaeem3.github.io/photo-tagging-app/',
    screenshotSrc: photoTaggingScreenshot,
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
  // {
  //   name: 'Automated Tennis Ball Launcher',
  //   description:
  //     'A custom designed, built, and programmed tennis ball launcher utilizing an MSP 432 Microcontroller and MATLAB Vision system. Winner of Fall 2017 Georgia Tech Mechatronics Competition.',
  // },
];
