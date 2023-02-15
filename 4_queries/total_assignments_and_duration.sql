--Get each day with total number of assignments and total duration of assignments

SELECT assignments.day as day, count(assignments.*) as number_of_assignments, sum(assignments.duration)
FROM assignments
GROUP BY day
ORDER BY day ASC;