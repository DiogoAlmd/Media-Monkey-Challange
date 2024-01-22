SELECT m.c2 AS nome_marca, 
 SUM(v.c3) AS total_vendas, 
 SUM(v.c4 * v.c3) AS receita
FROM vendasCorrigidas v
JOIN marcasCorrigidas m ON v.c2 = m.c1
GROUP BY v.c2, m.c2
ORDER BY receita / total_vendas DESC;