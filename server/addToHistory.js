const {getPool} = require('./db')
const pool = getPool()
const express = require("express");
const router = express.Router()

router.post("/add", async (req, res) => {
        const {order_id, product_name, user_name} = req.body;

            const result = await pool.query(
            `INSERT INTO history (order_id,product_name, user_name) 
            VALUES ($1, $2, $3) 
            RETURNING *`,
            [order_id, product_name, user_name]
        );

        res.json(result.rows[0]);})

module.exports = router;