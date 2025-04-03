const {getPool} = require('./db')
const pool = getPool()
const express = require("express");
const router = express.Router()

router.post("/add", async (req, res) => {
        const {product_name, user_name, product_image} = req.body;

            const result = await pool.query(
            `INSERT INTO orders (product_name, user_name, status, product_image) 
            VALUES ($1, $2, 'pending', $3) 
            RETURNING *`,
            [product_name, user_name, product_image]
        );

        res.json(result.rows[0]);})

module.exports = router;