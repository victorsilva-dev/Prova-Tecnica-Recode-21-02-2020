const db = require("../config/db");

class ConsultasController {

  static store = (req, res) => {
    const { data, hora, medico, paciente, especialidade } = req.body;
    db.query(
      "INSERT INTO `consultas` (`data`, `hora`, `medico`, `paciente`, `especialidade`) VALUES (?,?,?,?,?)",
      [data, hora, medico, paciente, especialidade],
      (err, consultas) => {
        res.redirect(302, "/consultas");
      }
    );
  };

  static update = (req, res) => {
    const { codigo, data, hora, medico, paciente, especialidade } = req.body;
    db.query(
      "UPDATE consultas SET data = ?, hora = ?, medico = ?, paciente = ?, especialidade = ? WHERE codigo = ?;",
      [data, hora, medico, paciente, especialidade, codigo],
      (err, results) => {
        res.redirect(302, "/consultas");
      }
    );
  };

  static delete = (req, res) => {
    const { id } = req.params;
    db.query(
      "DELETE FROM `consultas` WHERE codigo = ?",
      [id],
      (err, consulta) => {
        res.redirect(302, "/consultas");
      }
    );
  };
}

module.exports = ConsultasController;
