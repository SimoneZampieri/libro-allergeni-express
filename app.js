require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//rotta allergeni
const allergenRoutes = require("./routes/allergenRoutes");

app.use("/allergeni", allergenRoutes);

//rotta principale
app.get("/", (req, res) => {
  res.send("Benvenuto");
});

//rotta 404
app.use((req, res) => {
  res.status(404).send("Pagina non trovata");
});

//rotta 505
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Qualcosa è andato storto");
});

//porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${PORT} in ascolto`);
});
