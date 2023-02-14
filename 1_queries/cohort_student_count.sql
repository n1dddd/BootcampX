--Want to know the total number of students who were in the first three cohorts

SELECT count(name) FROM students WHERE cohort_id IN (1,2,3);