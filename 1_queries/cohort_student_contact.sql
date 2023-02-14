--Want to get every student that doesnt have a email or phone number

SELECT name, id, cohort_id FROM students WHERE email IS NULL OR phone IS NULL;