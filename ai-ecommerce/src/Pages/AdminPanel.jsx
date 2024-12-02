import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Box,
} from "@mui/material";

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false); 


  useEffect(() => {
    fetchProducts();
  }, []);

 
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.description) {
      alert("Please fill in both fields!");
      return;
    }
    try {
      await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      setNewProduct({ name: "", description: "" }); 
      fetchProducts(); 
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };


  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await fetch(`http://localhost:5000/api/products/${id}`, {
          method: "DELETE",
        });
        fetchProducts(); 
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Admin Panel
      </Typography>

      
      <Box
        display="flex"
        gap={2}
        justifyContent="center"
        alignItems="center"
        marginBottom={4}
      >
        <TextField
          label="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, name: e.target.value }))
          }
          variant="outlined"
        />
        <TextField
          label="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, description: e.target.value }))
          }
          variant="outlined"
        />
        <Button onClick={handleAddProduct} variant="contained" color="primary">
          Add Product
        </Button>
      </Box>

    
      {loading ? (
        <Typography align="center">Loading products...</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Description</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.length > 0 ? (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeleteProduct(product.id)}
                        variant="contained"
                        color="error"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No products available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default AdminPanel;
