
SELECT feedback_rating, COUNT(*) AS total
FROM feedback_neuralnexus
GROUP BY feedback_rating
ORDER BY feedback_rating DESC;