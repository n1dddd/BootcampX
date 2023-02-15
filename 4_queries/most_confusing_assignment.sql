--Get assignment with most assistance requests

SELECT assignments.id as id, assignments.name as name, assignments.day as day, assignments.chapter as chapter, count(assistance_requests.assignment_id) as total_requests
FROM assistance_requests
JOIN students on students.id = student_id
JOIN assignments on assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;

