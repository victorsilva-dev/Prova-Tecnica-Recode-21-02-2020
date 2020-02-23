const path = require("path");

class FilesController {

  static cssFiles = (req, res) => {
    res.sendFile(path.join(__dirname + `/../views/css/${req.params.file}`));
  };

  static imgFiles = (req, res) => {
    res.sendFile(path.join(__dirname + `/../views/img/${req.params.file}`));
  };

};

module.exports = FilesController
