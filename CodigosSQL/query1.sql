SELECT m.c2 AS nome_marca, SUM(v.c3) AS total_vendas
FROM vendasCorrigidas v
JOIN marcasCorrigidas m ON v.c2 = m.c1
GROUP BY v.c2, m.c2
ORDER BY total_vendas DESC
LIMIT 1;