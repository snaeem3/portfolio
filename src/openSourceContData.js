import balancerScreenshot from './assets/screenshots/balancer-screenshot.png';

export const osContributions = [
  {
    name: 'Balancer',
    organization: 'Code for Philly',
    description:
      'Balancer is an AI-assisted tool for users with bipolar disorder which helps select the most suitable medication based on symptoms and up-to-date research',
    contribution:
      'I refactored the front and backend of the user feedback form, built a medication-discussion chatbot with OpenAI API, and implemented various performance improvements/bug fixes.',
    pullRequests:
      'https://github.com/CodeForPhilly/balancer-main/pulls?q=author%3Asnaeem3',
    live: 'https://balancertestsite.com/',
    screenshotSrc: balancerScreenshot,
    techStack: ['React', 'Typescript', 'Django', 'PostgreSQL'],
  },
];
