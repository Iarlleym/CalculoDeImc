//INICIO -- Capturar o evento de submit do formulario
const form = document.querySelector('#formulario'); //#seleciona o id

form.addEventListener('submit', function (e) { //Escuta o submit, cria uma função que previme o evento de dafault.
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');// pega o valor digitado no input do peso
    const inputAltura = e.target.querySelector('#altura');// pega o valor digitado no input da altura
    
    const peso = Number(inputPeso.value); //Converte para number
    const altura = Number(inputAltura.value); //converte para number

    if (!peso){
        setResultado ('Peso Inválido', false);
        return;
    }

    if (!altura){
        setResultado ('Altura Inválida', false);
        return;
    }

    const imc = getImc (peso, altura);
    const nivelImc = getNivelObesidade (imc);

    if (imc > 0 && imc < 200){
    const msg = `Seu IMC é: ${imc} e voçê está: ${nivelImc}`;
    setResultado (msg, true);
    }else {
        const msg = 'O Valor digitado está Fora da realidade';
        setResultado (msg, true);
    }

} );
//FIM -- Capturar o evento de submit do formulario


//INICIO -- Função para verificar os niveis de obesidade

function getNivelObesidade (imc) {
    const nivel = ['Abaixo do Peso','Com o Peso Normal','Com Sobrepeso','Com Obesidade Grau 1','Com Obesidade Grau 2', 'Com Obesidade Grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

//FIM -- Função para verificar os niveis de obesidade




//INICIO -- Função para calcular o IMC

function getImc (peso, altura) {
    const imc = peso/altura**2;
    return imc.toFixed(2);
}

//FIM -- Função para calcular o IMC


//INICIO -- Função para criar paragrafos
function criaP () {
    const p = document.createElement ('p'); //Varialvel que salva o elemento criado, entre as '' cooloca o elemento e ser criado.
    return p;
}
//FIM -- Função para criar paragrafos

//INICIO -- Função para dacionar elementos na div do resultado
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //Zera o HTML do resultado
    const p = criaP() //Executa a Função de criar paragrafo

    if (isValid) {
        p.classList.add ('paragrafo-resultado');
    } else {
        p.classList.add ('bad');
    }


    
    p.innerHTML = msg;
    resultado.appendChild(p);
}
//FIM -- Função para dacionar elementos na div do resultado

