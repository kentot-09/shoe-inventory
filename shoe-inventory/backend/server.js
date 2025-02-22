const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

let shoes = []; // Temporary in-memory storage

// Get all shoes
app.get("/shoes", (req, res) => {
    res.json(shoes);
});

// Add a shoe
app.post("/shoes", (req, res) => {
    const { name, size, price, stock } = req.body;
    
    if (!name || !size || !price || !stock) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const newShoe = { id: Date.now(), name, size: parseInt(size), price: parseFloat(price), stock: parseInt(stock) };
    shoes.push(newShoe);
    res.json(newShoe);
});

// Delete a shoe
app.delete("/shoes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    shoes = shoes.filter(shoe => shoe.id !== id);
    res.json({ message: "Shoe deleted" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
