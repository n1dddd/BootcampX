--Get all students without a gmail email and phone number

SELECT name,email,id, cohort_id FROM students WHERE email NOT LIKE '%gmail.com' AND phone iS NULL