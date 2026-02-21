const express = require("express");
const cors = require("cors");

const reputationRoutes = require("./routes/reputation");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/reputation", reputationRoutes);

app.listen(5000, () => {
  console.log("Reputa AI backend running on port 5000");
});
