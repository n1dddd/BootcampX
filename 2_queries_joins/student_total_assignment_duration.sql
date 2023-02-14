--Ibrahim Schimmel total time spent on assignments

SELECT SUM(duration) as total_duration 
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name LIKE 'Ibrahim Schimmel';