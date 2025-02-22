import { useEffect, useState } from "react";

function App() {
    const [shoes, setShoes] = useState([]);
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    // Fetch all shoes when the component loads
    useEffect(() => {
        fetch("http://localhost:5000/shoes")
            .then(response => response.json())
            .then(data => setShoes(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Add a new shoe
    const addShoe = () => {
        if (!name || !size || !price || !stock) {
            alert("Please fill in all fields.");
            return;
        }

        const newShoe = { 
            name, 
            size: parseInt(size), 
            price: parseFloat(price), 
            stock: parseInt(stock) 
        };

        fetch("http://localhost:5000/shoes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newShoe),
        })
        .then(response => response.json())
        .then(data => {
            setShoes([...shoes, data]); // Update UI with new shoe
            setName(""); setSize(""); setPrice(""); setStock(""); // Clear inputs
        })
        .catch(error => console.error("Error adding shoe:", error));
    };

    // Delete a shoe
    const deleteShoe = (id) => {
        fetch(`http://localhost:5000/shoes/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setShoes(shoes.filter(shoe => shoe.id !== id));
        })
        .catch(error => console.error("Error deleting shoe:", error));
    };

    return (
        <div>
            <h1>Shoe Inventory</h1>
            <ul>
                {shoes.map(shoe => (
                    <div key={shoe.id} style={{
                        border: "1px solid black", padding: "10px", margin: "10px",
                    }}>
                        <strong>{shoe.name} (Size {shoe.size})</strong> <br />
                        Price: <strong>${shoe.price}</strong> <br />
                        Stock: <strong style={{ color: shoe.stock < 5 ? "red" : "black" }}>
                            {shoe.stock} {shoe.stock < 5 && "⚠️ Low Stock"}
                        </strong>
                        <br />
                        <button onClick={() => deleteShoe(shoe.id)}>Delete</button>
                    </div>
                ))}
            </ul>
            <h2>Add New Shoe</h2>
            <input type="text" placeholder="Shoe Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Size" value={size} onChange={e => setSize(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <input type="number" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} />
            <button onClick={addShoe}>Add Shoe</button>
        </div>
    );
}

export default App;
