const conn = require("./../connection/db.js");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  conn.query("SELECT * FROM tb_menus ORDER BY title", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Erro ao buscar o menu.");
    }

    res.render("index", {
      title: "Restaurante Leogom",
      menus: results,
    });
  });
});

module.exports = router;
