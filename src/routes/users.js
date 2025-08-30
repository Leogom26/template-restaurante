const conn = require("../connection/db.js");
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  conn.query("SELECT * FROM tb_users ORDER BY name", (err, result) => {
    if (err) {
      res.status(500).send(err);

      return;
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
