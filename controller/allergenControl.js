const connection = require("../config/db");

//recupero tutti i dati degli allergeni
const getAll = (req, res) => {
  const sql = "SELECT * FROM allergeni";

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Errore durante la query:", error);
      // In caso di errore, rispondi con uno status 500 e un messaggio di errore
      return res
        .status(500)
        .json({ error: "Errore nel recupero degli allergeni" });
    }
    // Se la query va a buon fine, restituisci i risultati in formato JSON
    return res.json(results);
  });
};

//recuper un allergene specifico per id
const getSingle = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM allergeni WHERE ID = ?";

  connection.query(sql, [id], (error, results) => {
    if (error) {
      console.error("Errore nella query", error);
      return res.status(500).json({
        error: "Errore nel recupero dell'allergene",
      });
    }
    if (results.lenght === 0) {
      return res.status(404).json({
        error: "Allergene non trovato",
      });
    }
    res.json(results[0]);
  });
};

module.exports = {
  getAll,
  getSingle,
};
