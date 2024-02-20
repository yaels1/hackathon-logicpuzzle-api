const express = require("express");
const router = express.Router();
const fs = require("fs");

function readData() {
  const file = fs.readFileSync("./data/characters.json");
  const data = JSON.parse(file);
  return data;
}
// get all characters and all info
router.get("/", (_req, res) => {
  const data = readData();
  console.log(data);
  res.json(data);
});

// get character id
router.get("/:id", (req, res) => {
  const data = readData();
  const singleCharacter = data.find(
    (character) => character.id === req.params.id
  );

  if (!singleCharacter) {
    res.status(404).send("character not found)");
    return;
  }
  res.json(singleCharacter);
});

module.exports = router;
