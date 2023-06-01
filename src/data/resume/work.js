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
    position: 'Support Operations Engineer',
    url: 'https://datadoghq.com.com',
    startDate: '2020-12-07',
    summary: 'Datadog is the essential monitoring and security platform for cloud applications',
    highlights: [
    ],
  },
];

export default work;
