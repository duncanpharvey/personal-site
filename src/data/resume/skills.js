const skills = [
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'AWS Lambda Functions',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Azure',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.js',
    competency: 2,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Flake8',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'GitLab',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'JavaScript'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Pytest',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Snowflake SQL/PostgreSQL/MSSQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'JavaScript'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  // '#3896e2',
  // '#c3423f',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
