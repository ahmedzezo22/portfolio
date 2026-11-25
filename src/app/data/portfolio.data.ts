export const PROFILE = {
  name: 'Ahmed AbdElaziz Mourad',
  title: 'Full Stack .NET Developer',
  location: 'Nasr City, Cairo, Egypt',
  email: 'ahmedelmajek2000@gmail.com',
  phone: '+20 101 054 3206',
  phoneHref: 'tel:+201010543206',
  linkedin: 'https://linkedin.com/in/ahmed-mourad-96119713b',
  linkedinLabel: 'linkedin.com/in/ahmed-mourad-96119713b',
  github: 'https://github.com/ahmedzezo22',
  githubLabel: 'github.com/ahmedzezo22',
  objective:
    'A dedicated Full Stack .NET Developer with a strong academic foundation and hands-on experience in both frontend and backend technologies. Proven ability to lead development teams, maintain and enhance software systems, and drive projects to meet business needs. Seeking opportunities to grow into senior technical roles while delivering scalable and maintainable software.',
  facts: [
    { label: 'Based in', value: 'Cairo, Egypt' },
    { label: 'Military service', value: 'Completed (Reserve Officer)' },
    { label: 'Languages', value: 'Arabic (Native), English (Good)' },
  ],
};

export interface Job { company: string; role: string; period: string; points: string[]; }
export const EXPERIENCE: Job[] = [
  { company: 'HealthInsights Group', role: 'Senior Software Engineer (Acting Team Lead)', period: '2022 – Present', points: [
    'Leading and mentoring a team of developers.',
    'Developing and maintaining Health Care Business Solutions: EMR (Electronic Medical Records), Radiology, Laboratory, Medication, Vitals, Fluids and ICU modules.',
    'Applying microservices architecture and Domain-Driven Design (DDD).',
    'Managing CI/CD with Docker containers and Kubernetes.'] },
  { company: 'Databand Company', role: 'Senior Software Engineer (Part-Time)', period: 'May 2024 – May 2025', points: [
    'Responsible for all technical projects within the company.',
    'Overseeing full-stack solutions and ensuring architectural best practices.'] },
  { company: 'CodeSolutions Company', role: 'Full Stack .NET Developer (Full-Time, then Part-Time)', period: '2021 – 2022', points: [
    'Worked on ERP systems supporting full business cycles.',
    'Developed the "Naql System" for logistics and transport management.',
    'Contributed to "FFMS" (Field Force Management System) for Eastern Region Municipality, Saudi Arabia.',
    'Built the "Bikers Community System" and "Express System" for logistics tracking.',
    'Designed and developed a Lab Information Management System (LIMS) for soil analysis.'] },
  { company: 'TTL Egypt', role: 'Angular Developer (Part-Time)', period: '', points: [
    'Built interactive and dynamic web applications using Angular.'] },
  { company: 'NTI (National Telecommunication Institute)', role: 'Trainee', period: '', points: [] },
  { company: 'Freelancer', role: 'Various Projects', period: '', points: [
    'Delivered multiple freelance web and desktop applications for clients.'] },
];

export const PROJECTS = [
  { icon: '01', name: 'Health Care Business System', text: 'Radiology, Laboratory, EMR, Medications, Vitals, ICU and Fluid Monitoring modules.', tags: ['Microservices', 'DDD', 'Docker', 'Kubernetes'] },
  { icon: '02', name: 'ERP System', text: 'Covering finance, HR, procurement, inventory and customer service.', tags: ['ASP.NET Core', 'SQL Server'] },
  { icon: '03', name: 'Naql System', text: 'A logistics and transportation management system (TMS).', tags: ['Logistics', 'TMS'] },
  { icon: '04', name: 'FFMS', text: 'Field Force Management System for municipality operations (Saudi Arabia).', tags: ['Field Force', 'Saudi Arabia'] },
  { icon: '05', name: 'LIMS', text: 'Lab Information Management System for soil testing and reporting.', tags: ['Lab', 'Reporting'] },
  { icon: '06', name: 'Bikers System', text: 'Social community platform for bikers.', tags: ['Community', 'Social'] },
  { icon: '07', name: 'Express System', text: 'End-to-end logistics tracking and parcel management solution.', tags: ['Tracking', 'Parcels'] },
];

export const SKILLS = [
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'Angular 2+ (latest version)', 'AngularJS', 'Knockout.js'] },
  { group: 'Backend & Languages', items: ['C#', 'ASP.NET Core MVC & Web API', 'ADO.NET', 'Node.js', 'PHP', 'C/C++'] },
  { group: 'Databases', items: ['SQL Server', 'MySQL', 'MongoDB', 'Entity Framework', 'LINQ to SQL'] },
  { group: 'Architecture & DevOps', items: ['Microservices (Event-driven, API Gateway, Service Registry)', 'Domain-Driven Design (DDD)', 'Docker (Dockerfile, Compose, Deployment)', 'Git, GitHub, TFS'] },
  { group: 'Other', items: ['Design Patterns', 'Problem Solving', 'Data Structures', 'Microsoft Office Suite'] },
];

export const EDUCATION = {
  degree: 'B.Sc. in Computer Science',
  school: 'Faculty of Science, Tanta University',
  year: '2017',
  grade: 'Very Good',
  project: 'Site for Conferences Management',
  projectGrade: 'Excellent',
  secondary: 'ELGAFARIA Secondary School, 2010–2013',
};
