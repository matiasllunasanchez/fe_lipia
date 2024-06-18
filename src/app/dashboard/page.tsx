// src/app/dashboard/page.tsx
"use client";

import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <section
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center w-full"
      style={{ backgroundImage: "url('/images/background-image.jpg')" }}
    >
      <Typography variant="h4" color={"black"}>
        Welcome, User
      </Typography>
      <Typography variant="h6" color={"black"}>
        Email: user@example.com
      </Typography>
      <Button onClick={handleLogout} variant="contained" color="secondary">
        Logout
      </Button>
    </section>
  );
};

export default Dashboard;
