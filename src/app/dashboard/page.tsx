"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { getGoogleDriveFiles } from "../../lib/googleDrive";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [files, setFiles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (session?.accessToken) {
      getGoogleDriveFiles(session.accessToken)
        .then((files) => setFiles(files))
        .catch((error) =>
          console.error("Error fetching Google Drive files:", error)
        );
    }
  }, [session]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <Container
      maxWidth="md"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <Typography variant="h4" className="mb-4">
        Dashboard
      </Typography>
      <Typography variant="h6" className="mb-4">
        Welcome, {session.user?.name}!
      </Typography>
      <Typography variant="body1" className="mb-4">
        Email: {session.user?.email}
      </Typography>
      <Typography variant="body1" className="mb-4">
        Access Token: {session.accessToken}
      </Typography>
      <Button variant="contained" color="secondary" onClick={() => signOut()}>
        Sign out
      </Button>
      <div className="mt-4 w-full">
        <Typography variant="h6" className="mb-2">
          Google Drive Files
        </Typography>
        {files.length > 0 ? (
          <ul>
            {files.map((file: any) => (
              <li key={file.id}>
                <Typography variant="body2">{file.name}</Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Typography variant="body2">No files found.</Typography>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
