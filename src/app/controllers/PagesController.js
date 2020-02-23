const db = require("../config/db");

class PagesController {

  static renderIndex = (req, res) => {
    res.render("index");
  };

  static renderMarcarConsulta = (req, res) => {
    res.render("marcarConsulta");
  };

  static renderConsultasMarcadas = (req, res) => {
    db.query("SELECT * FROM `consultas`;", (err, consultas) => {
      res.render("consultas", { consultas });
    });
  };

  static renderEditarConsulta = (req, res) => {
    const { id } = req.params;
    db.query(
      "SELECT * FROM `consultas` WHERE codigo = ?",
      [id],
      (err, consulta) => {
        res.render("editarConsulta", { consulta: consulta[0] });
      }
    );
  };
}

module.exports = PagesController;
