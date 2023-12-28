const enviarMsg = document.getElementById("enviarMsg");
const msgInput = document.getElementById("msgInput");

// elementos da interface 

const nomeBotao = document.getElementById("nomeBotao");
const popUp = document.getElementById("popUp");
const userInput = document.getElementById("userInput");
const tagArea = document.getElementById("tagArea");
const inputMsgArea = document.getElementById("inputMsgArea");
const mensagensHistorico = document.getElementById("mensagens");
const loadingContainer = document.getElementById("loadingContainer");
const loading = document.querySelectorAll(".loading");

// nome do usuário   

nomeBotao.addEventListener("click", () => {
    tagArea.classList.remove("none");
    tagArea.innerHTML = userInput.value;
    popUp.classList.add("none");
    inputMsgArea.classList.remove("none");
    mensagensHistorico.classList.remove("none");

})

// GET

const atualizarListaDeNomes = () => {
    const endpoint = "https://api-teste-3.diogoflorencio.repl.co/";
    fetch(endpoint)
        .then(response => response.json())
        .then(dados => {
            listarNomes(dados);
            console.log(dados)
        });
}
const listarNomes = (nomes) => {
    for(const nome of nomes){
        const chaves = Object.keys(nome);
        for (const chave of chaves) {
            const valor = nome[chave];
            criarLista(valor);
        }
    }
}
function criarLista(valor) {
    mensagensHistorico.appendChild(document.createElement('p')).textContent = valor;
    loading.forEach((elemento) => {
        elemento.classList.add("none")
    })
    console.log(valor)
}

// POST

const enviarNome = () => {
    const dados = {
        chave: msgInput.value
    };
    const cabecalho = {
        method: "POST",
        body: JSON.stringify(dados)
    };

    const endpoint = "https://api-teste-3.diogoflorencio.repl.co/";
    fetch(endpoint, cabecalho)
        .then(response => response.json())
        .then(dados => {
            const valorRetornado = dados.success;
        });
}

enviarMsg.addEventListener("click", () => {
    enviarNome();
    msgInput.value = "";
    atualizarListaDeNomes();
});