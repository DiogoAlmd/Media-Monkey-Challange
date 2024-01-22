SELECT c5 AS nome, SUM(c3) AS total_vendas, AVG(c4) as valor_medio_do_veiculo
FROM vendasCorrigidas
GROUP BY c5
ORDER BY total_vendas DESC;