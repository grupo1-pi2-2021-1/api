const { Router } = require("express");

const router = Router();
const Historico = require("../models/historico");

router.get("/procedure", (res) => {
  const data = require("../assets/procedures.json");
  res.json(data);
});

router.get("/insert_test", (req, res) => {
  const data = require("../dbConfig/insert");
  res.send(data.insertData())
});

router.get("/procedure/:id", (req, res) => {
  const data = require("../assets/procedures.json");
  res.json(data[req.params.id]);
})

router.get("/history", (req, res) => {
  let historico = new Historico().getAll();
  res.send(historico);
})

module.exports = router;
