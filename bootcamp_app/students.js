const { Pool } = require('pg');

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;

const values = [`%${cohortName}`, limit];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});

const queryString = `
SELECT students.id, students.name, cohorts.name as cohort_id
FROM students
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

const queryString2 = `
SELECT students.id, students.name, cohorts.name as cohort_id
FROM students
JOIN cohorts on cohorts.id = cohort_id
LIMIT 5;
`


pool
  .connect()
  .then(() => console.log(`DB is running on port ${pool.port}`));

pool.query(queryString2)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`)
  })
})
.catch(err => console.error('query error', err.stack));

pool.query(queryString,values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${args[0]} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));