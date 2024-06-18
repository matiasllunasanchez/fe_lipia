// src/app/dashboard/page.tsx
"use client";

import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Aquí puedes manejar el cierre de sesión
    router.push("/");
  };

  return (
    <Container className="min-h-screen flex flex-col justify-center items-center">
      <Typography variant="h4">Welcome, User</Typography>
      <Typography variant="h6">Email: user@example.com</Typography>
      <Button onClick={handleLogout} variant="contained" color="secondary">
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
