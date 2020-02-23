const { app } = require("./server");

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
