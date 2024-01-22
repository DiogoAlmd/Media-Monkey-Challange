**Projeto Classificatório**

Processo seletivo - Tech

**2024**

**SUMÁRIO**

**Situação problema: Questões**

1. Recuperação dos dados originais do banco de dados
1. Criar relatório de vendas

**Situação problema**

Você é responsável por um software de gestão de uma concessionária multimarcas, sua gestão solicitou um relatório de desempenho das vendas dos veículos no último ano.

Ao verificar o banco de dados você percebeu que algumas tabelas foram corrompidas em uma atualização. Todos os nomes de veículos e marcas tiveram alguns caracteres modificados, houve substituição de todos os "a" por "æ", "o" por "ø",.

É preciso reverter essas substituições para recuperar os nomes originais antes de construir o relatório.

Você encontrou um problema com os valores de vendas também, eles devem ser sempre do tipo number, mas alguns deles estão no tipo string. É necessário transformar as strings novamente em number.

**Exemplo:**

Original: "vendas": 11

Corrompido:

"vendas": "11"

**Questões**

Para esse projeto, você utilizará os arquivos broken\_database\_1 e broken\_database\_2 ([disponível aqui)](https://gitlab.com/-/snippets/2486045) e irá fazer uma série de transformações até que eles voltem ao formato original. Para isso será necessário desenvolver algumas funções. Você deverá utilizar a linguagem **JavaScript.**

1. **Recuperação dos dados originais do banco de dados**

Você deverá criar uma função para ler o arquivo broken\_database\_1.json e broken\_database\_2.json, e com isso criar funções para percorrer o banco de dados corrompido e corrigir erros descritos anteriormente, além de uma função para exportar os arquivos.json como saída.

**Portanto, serão 4 funções:**

1) Ler os arquivos Json;
1) Corrigir nomes de marca e veículo;
1) Corrigir vendas;
1) Exportar um arquivo JSON com o banco corrigido.
2. **Criar relatório de venda**

Seu relatório deverá ser um arquivo no **formato PDF**, nele será necessário responder algumas questões por meio de tabelas e gráficos.

Utilize a linguagem SQL para criar uma tabela única que contenha todos os dados necessários para o seu relatório, você deverá importar seus 2 arquivos JSON corrigidos para a plataforma [SQL Online](https://sqliteonline.com/), no final você deverá exportar sua tabela resultante como um arquivo .CSVpara utilizar no seu relatório.

**Seu relatório deverá responder às seguintes perguntas:**

1. Qual marca teve o maior volume de vendas?
1. Qual veículo gerou a maior e menor receita?
1. Qual a média de vendas do ano por marca?
1. Quais marcas geraram uma receita maior com número menor de vendas?
1. Existe alguma relação entre os veículos mais vendidos?

**Nesta etapa você ‘pode’ utilizar recursos que sustentem as respostas acima, como gráficos, textos, entre outros.**

**Documentação do trabalho realizado**

Você deverá criar um documento em ***formato PDF*** contendo uma breve explicação do algoritmo JS e do código SQL criado. Você deverá abordar os seguintes pontos:

- Uma breve explicação de cada função do código;
- Tratamentos feitos no código para evitar bugs;
- Outros pontos que queira compartilhar.

**Entregas esperadas:**

- Código JS utilizado para corrigir os dados
- Arquivos corrigidos broken\_database\_1.json e broken\_database\_2.json
- Código SQL
- Tabela unificada database.csv
- Relatório de vendas.PDF
- Explicação dos códigos.PDF

Após tudo pronto, coloque seu projeto em uma **pasta pública** em seu Google Drive ou em seu GitHub e nos **envie o link** para podermos avaliar o seu projeto.

**Observação¹:** A documentação é muito importante. Atente-se a isto.

**Observação²:** NÃO é escopo do teste desenvolver qualquer página .html.
