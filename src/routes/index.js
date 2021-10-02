const { Router } = require("express");

const router = Router();

router.get("/test", (req, res) => {
  const data = {
    name: "TestRoute",
    website: "google.com",
  };
  res.json(data);
});

router.get("/procedure", (res) => {
  const data = require("../assets/procedures.json");
  res.json(data);
});

router.get("/procedure/:id", (req, res) => {
  const data = require("../assets/procedures.json");
  res.json(data[req.params.id]);
})

module.exports = router;
