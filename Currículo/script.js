const nome = document.querySelector("#nome")
const editar = document.querySelector("#editar")
const sair = document.querySelector("#sair")
const cidade = document.querySelector("#cidade")

editar.addEventListener("click", function() {
    const novoNome = prompt("Digite seu nome:");
    if (novoNome !== null && novoNome.trim() !=="") {
        nome.textContent = novoNome.trim();
    }
    const novoCidade = prompt("Digite sua cidade:");
    if (novoCidade !== null && novoCidade.trim() !=="") {
        cidade.textContent = novoCidade.trim();
    }
});

sair.addEventListener("click", function() {
    const resposta = confirm("Realmente deseja sair ?");
    if (resposta) {
        alert("Você saiu do perfil!");
    }
});