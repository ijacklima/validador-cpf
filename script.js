console.log('Javascript carregado')

function validaCPF(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0,9);
    var digitos = cpf.substring(9);

    console.log('Números do CPF ' + numeros);
    console.log('Digitos do CPF ' + digitos);
    return true;
  }
}

function validacao() {
  console.log('Iniciando validação do CPF')

  var cpf = document.getElementById('cpf_digitado').value;
  console.log(cpf)

  var resultadoValidacao = validaCPF(cpf)

  if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
