import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { motion } from "motion/react";

export default function App() {
  return (
    <Container maxWidth="sm" className="mt-10">
      {/* Encabezado animado con Motion One y clases de Tailwind */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, easing: "ease-out" }}
        className="text-center"
      >
        <Typography variant="h3" component="h1" gutterBottom>
          🚀 Mi Portfolio
        </Typography>
      </motion.div>

      {/* Texto de prueba con Tailwind */}
      <Typography className="my-6 text-center">
        ¡Si ves esto, Material UI, Tailwind y Motion One funcionan
        correctamente!
      </Typography>

      {/* Botón de Material UI con Tailwind y acción de prueba */}
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="primary"
          className="shadow-lg"
          onClick={() => alert("¡Funciona!")}
        >
          Haz click
        </Button>
      </div>
    </Container>
  );
}
