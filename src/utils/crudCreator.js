const fs = require('fs');
const path = require('path');

// Função para criar uma pasta e arquivos dentro dela
function criarPastaEArquivos(pastaNome, arquivos, subpastas) {
    // Cria a pasta se ela não existir
    if (!fs.existsSync(pastaNome)) {
        fs.mkdirSync(pastaNome);
    }

    // Cria os arquivos dentro da pasta
    arquivos.forEach((arquivo) => {
        const caminhoArquivo = path.join(pastaNome, arquivo.nome);
        fs.writeFileSync(caminhoArquivo, arquivo.conteudo);
        console.log(`Arquivo criado: ${caminhoArquivo}`);
    });

    subpastas.forEach((subpasta) => {
        const caminhoPasta = path.join(pastaNome, subpasta.nome)
        const pastaFilha = 'Storybook'
        const caminhoPastaPai = path.join(__dirname, pastaNome)
        const caminhoPastaFilha = path.join(caminhoPastaPai, pastaFilha)
        fs.mkdirSync(caminhoPastaFilha)
        console.log(`Subpasta criada: ${caminhoPasta}`);

    })

}

// Defina os detalhes da pasta e dos arquivos que deseja criar
const pastaNome = 'CrudTask';
const arquivos = [
    {
        nome: `${pastaNome}Controller.ts`,
        conteudo: ''
    },
    {
        nome: `${pastaNome}Controller.ts`,
        conteudo: ''
    },

    { nome: `${pastaNome}.test.ts`, conteudo: '' },
];
const subpastas = [
    {
        nome: "Storybook"
    }
]

// Chame a função para criar a pasta e arquivos
criarPastaEArquivos(pastaNome, arquivos, subpastas);