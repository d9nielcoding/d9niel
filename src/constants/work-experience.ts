interface ExperiencePreview {
  companyName: string;
  jobTitle: string;
  period: string;
}

interface ExperienceDetail {
  description?: string;
  bulletPoints: string[];
}

export interface WorkExperienceContent {
  preview: ExperiencePreview;
  detail: ExperienceDetail;
}

export const WorkContent: WorkExperienceContent[] = [
  {
    preview: {
      companyName: 'BitYacht',
      jobTitle: 'Frontend Developer',
      period: '2024.07 - 2025.01',
    },
    detail: {
      bulletPoints: [
        'Enhancing code readability and reusability by establishing UI components and composables',
        'Reducing maintenance costs by refactoring API management and standardizing payload type definitions',
        'Facilitating design system discussions with PM in the absence of UI to improve communication and development speed',
        'Accelerating API integration and enhancing maintainability with TypeScript and Enum, reducing integration time by approximately 30%',
        'Improving UX by utilizing Nuxt middleware for permission and identity control and fixing errors in the original code',
        'Extracting common functions such as pagination and searchbar in the backstage system to create reusable components',
      ],
    },
  },
  {
    preview: {
      companyName: 'BitStreetX',
      jobTitle: 'Frontend Developer',
      period: '2022.07 - 2024.03',
    },
    detail: {
      bulletPoints: [
        'Implemented UI components such as Sidebar, Steps, Dialog, and Collapse, along with feature integration, within features like Corporate Accounts and Community Hub.',
        'Discussed with backend developers and authored RESTful API documentation, utilizing Postman for management, resolving the persistent issue of undocumented API communication.',
        "Recognizing the project's frequent deployment delays due to text revisions, I spearheaded the implementation of an i18n solution integrated with a Headless CMS (including Self-hosted Server, Fallback Solution, and GraphQL Client management), decoupling text changes from deployment frequency.",
        'Researched and implemented Vitest/Cypress/Gherkin to establish testing for core logic and common use cases.',
      ],
    },
  },
  {
    preview: {
      companyName: 'Kingnetsmart',
      jobTitle: 'Backend Developer',
      period: '2021.06 - 2022.05',
    },
    detail: {
      bulletPoints: [
        'Utilized Redis for caching the number of homepage community activities, avoiding excessive load on the database server from non-real-time features.',
        'Authored Repository and Query components to facilitate future CQRS partitioning of the database.',
        'To optimize collaboration between business and development departments, used DDD for 0-1 design and development of new projects, and used RabbitMQ and gRPC for communication between backend microservices, such as implementing Integration Events.',
      ],
    },
  },
  {
    preview: {
      companyName: 'ProphetStor',
      jobTitle: 'Software Intern',
      period: '2020.05 - 2020.08',
    },
    detail: {
      bulletPoints: [
        "Visualized the COVID-19 pandemic and personalized it for the company's clients, providing an assessment basis for whether the company's clients continue to operate. The work included setting up the website and UI/UX design.",
        'Connected the Mapbox API and libraries such as Echarts for data visualization.',
        'Connected the Twilio API for SMS notifications.',
      ],
    },
  },
];
