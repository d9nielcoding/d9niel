interface Role {
  name: string;
  description: string;
}

export const roles: Role[] = [
  {
    name: 'Developer',
    description:
      'I am a software product developer specializing in full-stack web development. I place great emphasis on user experience and creating unique value in products. As someone who thrives in team environments, I firmly believe that collaboration brings out the best in people and helps push beyond individual limitations.',
  },
  {
    name: 'Career Consultant',
    description:
      'Beyond understanding specific job markets, I focus on helping individuals discover their unique characteristics and values, providing career guidance from a long-term perspective. Through consultation, I offer fresh insights not only for career transitions but also for various workplace challenges and decisions.',
  },
  {
    name: 'Content Creator',
    description:
      'Through various new media forms like video, audio, and text, I aim to share my life philosophy and diverse perspectives gained from interactions with people across different fields. My goal is to inspire people with alternative lifestyle choices in a non-judgmental way, providing positive motivation for them to explore different paths in life.',
  },
];
