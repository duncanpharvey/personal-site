/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Datadog',
    position: 'Technical Solutions Operations Engineer 2',
    url: 'https://datadoghq.com',
    startDate: '2022-02-07',
    summary: `Datadog brings together end-to-end traces, metrics, and logs to make applications, infrastructure,
    and third-party services entirely observable. As a Technical Solutions Operations Engineer I design and oversee
    technology systems that enable the Technical Solutions team to operate efficiently and to achieve our strategic goals.`,
    highlights: [
      'Implemented a GitLab CI/CD pipeline to deploy AWS Lambda Functions, API Gateways, and other resources using the Serverless Application Model framework and CloudFormation',
      'Developed Python based cron jobs and APIs to automate workflows',
      'Created dashboards to track Technical Support team KPIs using Snowflake SQL and Metabase',
    ],
  },
  {
    name: 'Datadog',
    position: 'Software Engineer (Embed)',
    url: 'https://datadoghq.com',
    startDate: '2023-02-27',
    endDate: '2023-03-17',
    summary: `I spent 3 weeks on an embed as a Software Engineer on the Serverless Integrations Engineering team where I
    added functionality to CI/CD tools that allow AWS Step Functions logs to be sent to Datadog. These logs were then used to construct traces of Step Function executions.`,
    highlights: [
      'Updated the Datadog Serverless Framework Plugin to automatically instrument Step Functions with Datadog logging',
      'Added Datadog CLI commands to instrument and uninstrument Step Functions with Datadog logging',
    ],
  },
  {
    name: 'Datadog',
    position: 'Solutions Engineer',
    url: 'https://datadoghq.com',
    startDate: '2020-12-07',
    endDate: '2021-02-06',
    summary: 'As a Solutions Engineer I provided technical customer support on all Datadog products to customers using Zendesk, Live Zendesk Chat, and Zoom. I specialized in Cloud Integrations and Containers.',
    highlights: [
      'Collaborated with Tier 2 Support and Engineering to provide solutions for complex issues raised by customers',
      'Performed live demos of Datadog to prospective customers',
      'Developed a Chrome Extension that over 250 members of the Technical Solutions team use to hide selected Zendesk views',
      'Held Office Hours to provide mentorship to other Solutions Engineers',
    ],
  },
  {
    name: 'Call of the Sea',
    position: 'Software Developer',
    url: 'https://callofthesea.org',
    startDate: '2019-11-17',
    endDate: '2021-06-17',
    summary: `Call of the Sea is an educational non-profit that connects people to the sea and maritime traditions.
    They aim to increase coastal access and empower people of all backgrounds through experiential and environmental education on the water.
    As a Software Developer I maintained the third party applications used to run the educational sailing programs and created custom integrations to connect them.`,
    highlights: [
      'Synced sail registrations from Eventbrite to Airtable using their respective APIs',
      'Developed front end integrations for Bloomerang donation forms, Stripe payments, and Flickr photo albums',
      'Improved Lighthouse performance score for callofthesea.org by 50 points',
      'Added site wide event tagging in Google Analytics',
      'Developed a Node.js app to move data from Airtable to a PostgreSQL database that a Google Data Studio dashboard pulls from to visualize the data',
      'Created Zapier integrations that generate contracts and calendar events when a client registers for a sail',
    ],
  },
  {
    name: 'Call of the Sea',
    position: 'Deckhand / Educator',
    url: 'https://callofthesea.org',
    startDate: '2019-04-01',
    endDate: '2019-11-16',
    summary: 'As a Deckhand and Educator I educated SF Bay Area youth about sailing and environmental science.',
    highlights: [
      'Developed and ran educational programs for students from grades 3 through 12',
      'Lead instructor for celestial navigation program that covered how to use the Sun, other stars, the planets, and the Moon to plot a position on a nautical chart',
      'Performed maintenance necessary to the operations of the sailing vessel',
    ],
  },
  {
    name: 'SEA - Sea Education Association',
    position: 'Deckhand',
    url: 'https://sea.edu',
    startDate: '2018-10-08',
    endDate: '2019-01-16',
    summary: `Sea Education Association is a non-profit that is an internationally recognized leader in undergraduate ocean education.
    They offer programs with an interconnected suite of courses designed to explore a specific ocean-related theme using a cross-disciplinary approach.
    As a Deckhand I worked with the rest of the crew to teach students how to work as a team to sail a 132 ft. brigantine rigged ship.`,
    highlights: [
      'Taught sailing, oceanography, and celestial navigation during a voyage from Massachusetts to Grenada',
    ],
  },
  {
    name: 'Veyo',
    position: 'QA Engineer',
    url: 'https://veyo.com',
    startDate: '2016-11-21',
    endDate: '2018-10-05',
    summary: `Veyo brings safer, smarter transportation to health care and drastically improves the way patients get to and from their medical appointments.
    As a QA Engineer I ensured the software delievered by the Engineering team was of high quality by implementing and executing testing strategies.`,
    highlights: [
      'Tested functionality and customer experience for the trip booking platform where Veyo\'s call center schedules over 10M trips every year',
      'Built and tested an eligibility service that handles coverage changes for over 2M members',
      'Designed a platform that over 190 healthcare facilities use to manage trips. Advised the team on testing and integration with other services',
      'Migrated over 1M trips across 7 accounts to the new trip booking platform using C# and SQL scripts. As a result, average handle time decreased by 10% for accounts on the new platform',
      'Documented customer feedback and translated use cases into technical requirements',
    ],
  },
  {
    name: 'Epic',
    position: 'Technical Services',
    url: 'https://www.epic.com',
    startDate: '2014-09-02',
    endDate: '2016-06-08',
    summary: `Epic develops software to help people get well, help people stay well, and help future generations be healthier.
    As a member of the Technical Services team I partnered with hostipals and acted as a technical support resource for the implementation and maintenance
    of their Hospital Billing platform.`,
    highlights: [
      'Administered technical support to two hospitals through phone, e-mail, and on site visits to ensure their success',
      'Acted as the lead Technical Services resource for implementing Hospital Billing product at Montefiore Medical Center',
      'Facilitated the correction of hundreds of medications with incorrect claims settings between the claims, billing, and medication teams. Released over $15M in held accounts by fixing the errors',
      'Directed an internal team of 10 developers and members of technical services in migrating hundreds of properties from the old rule evaluation service to the new service',
      'Supervised a hospital billing team in updating their coverage management system. Released over $3M in held accounts by automating coverage changes that occur during billing',
    ],
  },
  {
    name: 'Middlebury College',
    position: 'Physics Teaching Assistant',
    url: 'https://middlebury.edu',
    startDate: '2012-01-09',
    endDate: '2014-05-25',
    summary: `Middlebury College is an institution that prepares students to address the world's most challenging problems
    and is committed to educating students in the tradition of the liberal arts. As a Physics Teaching Assistant I helped students with their Physics coursework.`,
    highlights: [
      'Proctored labs, held study sessions, and graded problem sets and lab work for introductory level Physics courses',
    ],
  },
];

export default work;
