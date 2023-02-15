--Want all assignments for each day of bootcamp

SELECT day, count(assignments.*) as total_assignments 
FROM assignments
GROUP BY assignments.day
ORDER BY day;