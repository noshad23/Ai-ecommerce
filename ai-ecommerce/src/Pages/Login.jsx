import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(null); // To handle errors

  // Define handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the event
    setFormData((prev) => ({ ...prev, [name]: value })); // Update formData state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset errors

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
      } else {
        setError(data.message || "Invalid username or password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: "bold" }}>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange} // Call handleChange function
            required
          />
        </Box>
        <Box mb={3}>
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange} // Call handleChange function
            required
          />
        </Box>

        {/* Error message */}
        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Container>
  );
}

export default Login;
