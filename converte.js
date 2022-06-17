const inputKg = document.querySelector('#inputKg');
const listaResultado = document.querySelector('#saida');
const botaoLimpar = document.querySelector('#botaoLimpar');


function converteMedidas() {
    let valorKg = document.querySelector('#inputKg').value;
    document.querySelector('#grama').textContent = valorKg * 1000;
    document.querySelector('#miligrama').textContent = valorKg * 1000000;
    document.querySelector('#tonelada').textContent = valorKg * 0.001;

    listaResultado.removeAttribute('hidden');
    botaoLimpar.removeAttribute('hidden');
}


botaoLimpar.addEventListener('click',function(){
    listaResultado.setAttribute('hidden','hidden');
    inputKg.value = '';
    inputKg.focus();
    botaoLimpar.setAttribute('hidden','hidden');
});
