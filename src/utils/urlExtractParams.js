// URL
const url = "https://www.latamairlines.com/br/pt/oferta-voos?origin=FLN&inbound=2024-01-26T15%3A00%3A00.000Z&outbound=2024-01-26T15%3A00%3A00.000Z&destination=SAO&adt=1&chd=0&inf=0&trip=RT&cabin=Economy&redemption=false&sort=RECOMMENDED";

// Função para extrair parâmetros da URL
function extrairParametros(url) {
    const params = new URLSearchParams(url.split('?')[1]);
    const parametros = {};

    for (const [key, value] of params) {
        parametros[key] = value;
    }

    return parametros;
}

// Chamada da função
const parametros = extrairParametros(url);
console.log(parametros);
