import balancerScreenshot from './assets/screenshots/balancer-screenshot.png';

export const osContributions = [
  {
    name: 'Balancer',
    organization: 'Code for Philly',
    description:
      'Balancer is an AI-assisted tool for users with bipolar disorder which helps select the most suitable medication based on user symptoms and up-to-date research.',
    contribution:
      'I built a medication-discussion chatbot powered by the OpenAI API and an agents and tools architecture. I also improved the React frontend and Django backend of the user feedback form.',
    pullRequests:
      'https://github.com/CodeForPhilly/balancer-main/pulls?q=author%3Asnaeem3',
    live: 'https://balancertestsite.com/',
    screenshotSrc: balancerScreenshot,
    techStack: ['React', 'Typescript', 'Django', 'PostgreSQL'],
  },
];
