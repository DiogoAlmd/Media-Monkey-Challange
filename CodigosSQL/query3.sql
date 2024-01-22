SELECT m.c2 AS nome_marca, AVG(v.c3) AS media_vendas
FROM vendasCorrigidas v
JOIN marcasCorrigidas m ON v.c2 = m.c1
GROUP BY v.c2, m.c2;
