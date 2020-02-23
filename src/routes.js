const { Router } = require("express")
const FilesController = require("./app/controllers/FilesController")
const PagesController = require("./app/controllers/PagesController")
const ConsultasController = require("./app/controllers/ConsultasController")
const routes = Router()


//rotas de arquivos
routes.get("/css/:file", FilesController.cssFiles);
routes.get("/img/:file", FilesController.imgFiles);

//rotas de páginas
routes.get("/", PagesController.renderIndex);
routes.get("/cadastro", PagesController.renderMarcarConsulta);
routes.get("/cadastro/:id", PagesController.renderEditarConsulta);
routes.get("/consultas", PagesController.renderConsultasMarcadas);

//rotas de consultas
routes.post("/consultas", ConsultasController.store);
routes.get("/consultas/deletar/:id", ConsultasController.delete);
routes.post("/consultas/editar", ConsultasController.update);

module.exports = routes