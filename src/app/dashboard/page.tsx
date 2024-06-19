// src/app/dashboard/page.tsx
"use client";

import React from "react";
import { Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleLogout = () => {
    signOut();
    router.push("/");
  };

  return (
    <section
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center w-full"
      style={{ backgroundImage: "url('/images/background-image.jpg')" }}
    >
      <Typography variant="h6" className="mb-4">
        Welcome, {session.user?.name}!
      </Typography>
      <Typography variant="body1" className="mb-4">
        Email: {session.user?.email}
      </Typography>
      <Button onClick={handleLogout} variant="contained" color="secondary">
        Logout
      </Button>
    </section>
  );
};

export default Dashboard;
