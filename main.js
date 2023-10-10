const form = document.querySelector('form#formulario-contatos')
var nomes = []
var numeros = []
var dados = ''
//const botao = document.querySelector('button#btn-adicionar')



form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaDados()
    inserindoDados()
})

function adicionaDados(){
    var nome_contato = document.querySelector('input#nome-contato')
    var contato = document.querySelector('input#tel-contato')

    if(nomes.includes(nome_contato.value) || numeros.includes(contato.value)){
        alert('Contato já existente')
    }
    else{
        nomes.push(nome_contato.value)
        numeros.push(contato.value)

        var dado = '<tr>'
        dado += `<td>${nome_contato.value}</td>`
        dado += `<td>${contato.value}</td>`
        dado += `</tr>`

        dados += dado

        nome_contato.value = ''
        contato.value = ''
    }
}

function inserindoDados(){
    document.querySelector('table').style.display = 'table'
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = dados
}


