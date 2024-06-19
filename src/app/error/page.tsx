"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Button } from "@mui/material";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // <Container className="flex flex-col items-center justify-center min-h-screen"> // REVISAR PORQUE FUNCA MAL
    <section className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
      <Typography variant="h4" className="mb-4">
        Something went wrong!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => reset()}>
        Try Again
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => router.push("/")}
      >
        Go Home
      </Button>
    </section>
  );
};

export default Error;
