
let titulo = document.createElement("h1")
titulo.innerText= "Bem vindo a nossa loja"
titulo.id = "titulo_id"
document.body.appendChild(titulo)

let produto = document.createElement("div")

produto.innerHTML = `
<h2>Produto Em Promoção</h2>
<img src="https://cdn.awsli.com.br/600x450/2443/2443989/produto/241308032/ps5-slim-spider2-i39ovbvzhm.jpg" alt="Produto em promocao" width="550" height="550">
<p>Nome: Playstation 5 Spider man edition</p>
<p>Preço: R$ 2000,00</p>
<p>Descrição: Nao deixe essa oportunidade passar tenha em suas maõs o melhor console da nova geração a um preço ajustado</p>

`;
document.body.appendChild(produto)
let produto2 = document.createElement("h2")
produto2.innerText= "CONFIRA TAMBEM"
produto2.id = "produto2_id"
document.body.appendChild(produto2)
let segundaDiv = document.createElement("div")
segundaDiv.innerHTML = `
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKE-5l0XTxpsE7l0oFmaPum6xdswTGjJ9bwM7YCCkTg&s" alt="Xbox" width="550" height="550">
<p>Nome: Xbox Series X </p>
<p>Preço: R$ 2000,00</p>
<p>Descrição: Nao deixe essa oportunidade passar tenha em suas maõs o melhor console da nova geração a um preço ajustado</p>
`
document.body.appendChild(segundaDiv)