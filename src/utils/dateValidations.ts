export function validarDatas(dataInicio: string, dataFim: string) {
    // Converter as strings de data para objetos Date
    var inicio = new Date(dataInicio);
    var fim = new Date(dataFim);
  
    // Comparar as datas numericamente
    if (inicio < fim) {
      console.log('A data de início é menor que a data de fim.');
      return true;
    } else if (inicio > fim) {
      console.log('A data de início é maior que a data de fim.');
      return false;
    } else {
      console.log('As datas são iguais.');
      return false;
    }
  }
  
  // Exemplo de uso
  var dataInicio = '2023-01-01';
  var dataFim = '2023-01-10';
  
  validarDatas(dataInicio, dataFim);