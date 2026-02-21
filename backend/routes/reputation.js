const express = require("express");
const router = express.Router();

// Dummy scoring logic (replace with real algorithm)
router.post("/score", (req, res) => {
  const { interactions, reliability } = req.body;

  const score = (interactions * 2) + reliability;

  res.json({
    reputationScore: score
  });
});

module.exports = router;
