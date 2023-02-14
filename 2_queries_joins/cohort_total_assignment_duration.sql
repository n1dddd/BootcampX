--Retrieve total assignment duration for FEB12 cohort

SELECT SUM(duration) as total_duration 
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE 'FEB12';