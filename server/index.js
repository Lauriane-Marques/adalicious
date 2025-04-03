const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors()); 
app.use(express.json());

const port = 3000;

const {getPool} = require('./db')
const pool = getPool()

const items = require("../client/adalicious/src/data.json")

const createOrder = require("./createOrder")
const updateOrder = require("./updateOrder")
const deleteOrder = require("./deleteOrder")

//Affiche le menu
app.get("/menu", async (req, res) => {
    res.json(items)
} );

// Affiche toutes les commandes en cours
app.get("/orders", async (req, res) => {
    const data = await pool.query("SELECT * FROM orders WHERE status='pending'");
    return res.json(data.rows);
} );

// Affiche une commande spécifique
app.get("/orders/:id", async (req, res) => {
    let orderId = req.params.id
    const data = await pool.query("SELECT * FROM orders WHERE id=$1",[orderId]);
    return res.json(data.rows[0]);
});

// Crée une commande
app.use("/orders", createOrder);

// Met à jour une commande
app.use("/orders", updateOrder);

// //Supprime une commande
app.use("/orders", deleteOrder);


// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

