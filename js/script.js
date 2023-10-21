const main = document.querySelector("#card-container");
const url = "https://randomuser.me/api/?results=5";

function iniciarFetch() {
  fetch(url)
    .then((dadosResponse) => dadosResponse.json())
    .then((data) => {  console.log(data)
      data.results.map((item) => {
        console.log(item);
      
        criarCard(
          item.picture.large,
          item.name.first,
          item.name.last,
          item.dob.age,
          item.email,
          item.phone,
          
        );

      
       
      });
    });
}
iniciarFetch();

function criarCard(img, nome, sobrenome, idade, email, telefone,saldo,id) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = id
  card.innerHTML = `
    <div class="img-usuario"> 
      <img src=${img}>;
    </div>
    <p>Nome : <span class="paragrafo-color">${nome} ${sobrenome}</span></p>
    <p>Idade : <span class="paragrafo-color">${idade}</span></p>
    <p>Email : <span class="paragrafo-color">${email}</span></p>
    <p>telefone : <span class="paragrafo-color">${telefone}</span></p> 
    <p id = "saldoContainer">Saldo Bancario : <span class="paragrafo-color">${saldo}</span></p>
    <div class="btn-excluir">
      <button onclick="funcaoDeleteProfile()"> Excluir Perfil </button>
    </div>
  `;
  
  main.appendChild(card);

}

function  gerarSaldo (){
return (Math.random() * 10000 ).toFixed(2)
  
}

console.log(gerarSaldo())