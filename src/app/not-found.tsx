"use client";
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
      <Typography variant="h4" className="mb-4">
        404 - Page Not Found
      </Typography>
      <Link href="/">
        <Button variant="contained" color="primary">
          Go Home
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
