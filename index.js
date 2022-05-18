// Importa o código da biblioteca express
const express = require("express");
// Inicializa uma aplicação express
const app = express();
// Cria uma função para tratar uma requisição (request handler)
function index(request, response, next) {
 response.send("Olá mundo!");
}
// Associamos a rota / ao nosso request handler chamado index
app.get("/", index);
// Iniciamos a aplicação na porta no valor da variável de ambiente PORT ou 3000
app.listen(process.env.PORT ?? 3000);