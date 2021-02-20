function foco(){
    document.getElementById('alert').className = ''
}

function calcular(){
    var a = document.querySelector('#diametro').value
    a = Number(a)
    var b = document.querySelector('#altura').value
    b = Number(b)

    if (a && b > 0 || a && b !== ""){

        var larg = (a * 3.14)+1
        var alt = b + 10
        var tela = document.querySelector('#resultado')
        tela.innerHTML = `
        <p>O seu cilindro deve ter:</p>
        <h2>${larg} de Largura</h2>
        <p>O seu cilindro deve ter:</p>
        <h2>${alt} de Altura</h2>
        `
        tela.className = 'resultado2' 

    } else {
        // alert('digite os campos de valores')
        document.getElementById('alert').className = 'alert'
    }
}
