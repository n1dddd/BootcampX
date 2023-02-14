--Get all graduates without linked github

SELECT name, email, phone FROM students WHERE end_date IS NULL;