--Want all assignments for each day of bootcamp, as long as assignments >= 10

SELECT day, count(assignments.*) as total_assignments 
FROM assignments
GROUP BY assignments.day
HAVING count(assignments.*) >= 10
ORDER BY assignments.day;