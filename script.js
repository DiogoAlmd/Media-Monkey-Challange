const fs = require('fs');

// Função para ler arquivos JSON
function lerArquivosJson(caminhoArquivo1, caminhoArquivo2) {
    try {
        const conteudoArquivo1 = fs.readFileSync(caminhoArquivo1, 'utf-8');
        const conteudoArquivo2 = fs.readFileSync(caminhoArquivo2, 'utf-8');

        const dadosJson1 = JSON.parse(conteudoArquivo1);
        const dadosJson2 = JSON.parse(conteudoArquivo2);

        return { dadosJson1, dadosJson2 };
    } catch (erro) {
        console.error('Erro ao ler os arquivos JSON:', erro.message);
        return null;
    }
}

// Função para corrigir nomes de marca e veículo
function corrigirNomes(dados) {
    // Função para reverter substituições de caracteres especiais
    function reverterSubstituicoes(str) {
        return str.replace(/æ/g, 'a').replace(/ø/g, 'o');
    }

    dados.forEach((item) => {
        // Verificar se item.marca e item.nome estão definidos antes de reverter as substituições
        if (item.marca) {
            item.marca = reverterSubstituicoes(item.marca);
        }
        if (item.nome) {
            item.nome = reverterSubstituicoes(item.nome);
        }
    });
}

// Função para corrigir vendas
function corrigirVendas(dados) {
    dados.forEach((item) => {
        item.vendas = parseInt(item.vendas);
    });
}

// Função para exportar dados como JSON
function exportarJson(dados, caminhoDestino) {
    try {
        const jsonDados = JSON.stringify(dados, null, 2);
        fs.writeFileSync(caminhoDestino, jsonDados, 'utf-8');
        console.log(`Dados exportados para: ${caminhoDestino}`);
    } catch (erro) {
        console.error('Erro ao exportar dados como JSON:', erro.message);
    }
}

// Lógica de uso:
// Caminhos dos arquivos de entrada e saída
const caminhoArquivo1 = 'data/broken_database_1.json';
const caminhoArquivo2 = 'data/broken_database_2.json';

// Caminhos dos arquivos de saída
const caminhoDestinoVendas = 'data/vendasCorrigidas.json';
const caminhoDestinoMarcas = 'data/marcasCorrigidas.json';

// Leitura dos arquivos JSON
const { dadosJson1, dadosJson2 } = lerArquivosJson(caminhoArquivo1, caminhoArquivo2);

if (dadosJson1 && dadosJson2) {
    corrigirNomes(dadosJson1);
    corrigirNomes(dadosJson2);

    corrigirVendas(dadosJson1);

    // Exportar dados corrigidos como JSON
    exportarJson(dadosJson1, caminhoDestinoVendas);
    exportarJson(dadosJson2, caminhoDestinoMarcas);
}