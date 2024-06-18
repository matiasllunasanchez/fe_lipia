"use client";
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen">
      <Typography variant="h4" className="mb-4" color={'black'}>
        404 - Page Not Found
      </Typography>
      <Link href="/">
        <Button variant="contained" color="primary">
          Go Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
