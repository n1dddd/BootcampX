const { Pool } = require('pg');

const args = process.argv.slice(2);


const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});

pool
  .connect()
  .then(() => console.log(`DB is running on port ${pool.port}`));

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_id
FROM students
JOIN cohorts on cohorts.id = cohort_id
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`)
  })
})
.catch(err => console.error('query error', err.stack));

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_id
FROM students
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${args[0]}%'
LIMIT ${args[1]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${args[0]} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));