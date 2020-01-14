const { Router } = require("express");

const routes = Router();

// Métodos HTTP: GET, POST PUT E DELETE

// Tipos de parâmetros:
// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params; req.params // Mais utilizados em Put e Delete
// Body; req.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

routes.post("/users", (request, response) => {
  console.log(request.body);
  return response.json({ message: "Olá mundo! Jesus te ama!" });
});

module.exports = routes;
