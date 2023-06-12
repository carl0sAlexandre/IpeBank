const botao_x_ipva = document.querySelector(".botao_x_ipva")
const botao_x_aluguel = document.querySelector(".botao_x_aluguel")
const botao_x_mcdonalds = document.querySelector(".botao_x_mcdonalds")

let contas = [];

function pagarDivida() {
    const tabela_dividas = document.querySelector("#tabela_dividas")
    tabela_dividas.innerHTML = "";
    for (let c = 0; c < contas.length; c++) {
        const conta = contas[c];
        // Criar elementos HTML para a linha da tabela
        const linha = document.createElement("tr")
        linha.classList.add('row');

        const venci = document.createElement("td");
        venci.classList.add('vencimento_class');

        const valorDaDivida = document.createElement("td");
        valorDaDivida.classList.add('valor_class');

        const name_div = document.createElement("td")
        name_div.classList.add('name_divida_class');
        
        const imagem_dinheiro = document.createElement('img');
        imagem_dinheiro.classList.add('imagem_dinheiro');

        const imagem_seta_baixo = document.createElement('img');
        imagem_seta_baixo.classList.add('imagem_seta_baixo');
        
        // Definir o conteúdo dos elementos
        imagem_dinheiro.src = "img/icone.modal.svg";
        imagem_seta_baixo.src = "img/seta_baixo.svg"
        name_div.textContent = conta.name
        venci.textContent = conta.data
        valorDaDivida.textContent = conta.preco
        // Adicionar elementos à linha
        
        linha.appendChild(imagem_dinheiro)
        linha.appendChild(name_div)
        linha.appendChild(venci)
        linha.appendChild(valorDaDivida)
        linha.appendChild(imagem_seta_baixo)

        tabela_dividas.appendChild(linha)
    }
}

function adicionarAoArray(name , data , preco ) {
    contas.push({name , data , preco});
    pagarDivida();
}


function botaoConfirmar(event){
    const ipva = document.querySelector(".divida_ipva");
    const casa = document.querySelector(".divida_aluguel");
    const mcdonalds = document.querySelector(".divida_McDonalds");
    
    const name = event.target.value
    if(name =="IPVA"){
        const data = vencimento_divida_ipva.value;
        const preco = `-R$ ${valor_divida_ipva.value}`
        adicionarAoArray(name,data, preco);
    
        fecharModal("ipva")
        ipva.style.display = "none"
    }

    if(name == "Aluguel"){
        const data = vencimento_divida_aluguel.value;
        const preco = `-R$ ${valor_divida_aluguel.value}`
        adicionarAoArray(name,data, preco);

        fecharModal("aluguel")
        casa.style.display = "none"
    }

    if(name == "McDonalds"){
        const data = vencimento_divida_mcdonalds.value;
        const preco = `-R$ ${valor_divida_mcdonalds.value}`
        adicionarAoArray(name,data, preco);
        
        fecharModal("mcdonalds")
        mcdonalds.style.display = "none"
    }
}

function exibirModal(modalName){
    const modal = document.querySelector(`.modal_divida_${modalName}`);
    if (modal) {
        modal.style.display = "flex";
    }

    const modalConteiner = document.querySelector(".modal_conteiner");
    if (modalConteiner) {
        modalConteiner.style.display = "flex";
    }
}

function modal_ipva(){
    exibirModal("ipva")
}
function modal_aluguel(){
    exibirModal("aluguel")
}

function modal_McDonalds() {
    exibirModal("mcdonalds")
}

function fecharModal(modalName) {
    const modal = document.querySelector(`.modal_divida_${modalName}`);
    if (modal) {
        modal.style.display = "none";
    }

    const modalConteiner = document.querySelector(".modal_conteiner");
    if (modalConteiner) {
        modalConteiner.style.display = "none";
    }
}

botao_x_ipva.addEventListener("click", function(){
    fecharModal("ipva")
})

botao_x_aluguel.addEventListener("click", function(){
    fecharModal("aluguel")
})

botao_x_mcdonalds.addEventListener("click", function(){
    fecharModal("mcdonalds")
})
