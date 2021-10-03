const { Router } = require("express");
const fs = require("fs")

const router = Router();
const db = require("../dbConfig/dbConfig");

router.get("/procedure", (req, res) => {
  const data = fs.readFileSync("../assets/procedures.json");
  res.json(data);
});

router.get("/insert_test", (req, res) => {
  const data = fs.readFileSync("../dbConfig/insert");
  res.send(data.insertData())
});

router.get("/procedure/:id", (req, res) => {
  const data = fs.readFileSync("../assets/procedures.json");
  res.json(data[req.params.id]);
})

router.get("/history", (req, res) => {
  const historico = db.query(`SELECT * FROM RESPONSAVEL_TECNICO`)
  res.send(historico);
})

module.exports = router;
