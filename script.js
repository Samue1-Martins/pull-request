var nome = document.getElementById('nome');
var charset = nome.toString();

function iniciar() {
    
    while(typeof nome != "string"){
        alert("Nome invalido, digite novamente");
        nome = prompt("Digite o nome novamente.");    
    }

    while(charset.length < 3){
        alert("Nome invalido estamos esperando um nome com mais de 3 caracteres");
        nome = prompt("Digite o nome novamente."); 
    }

    document.getElementById("nome").innerHTML = nome;
}


