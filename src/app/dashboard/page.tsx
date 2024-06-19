"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Card,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { getGoogleDriveFiles } from "../../lib/googleDrive";
import FileIcon from "@mui/icons-material/InsertDriveFile";
import CustomLoader from "../common/loader";

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
    return (
      <section
        className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center w-full"
        style={{ backgroundImage: "url('/images/background-image.jpg')" }}
      >
        <Typography variant="h2" className="mb-4" color={"#457B9D"}>
          Loading...
        </Typography>
      </section>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <section
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center w-full pb-5 pt-5"
      style={{ backgroundImage: "url('/images/background-image.jpg')" }}
    >
      <Box className=" flex flex-col justify-end items-center p-5  w-[560px]">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          className="mb-4 w-full"
        >
          <Avatar
            src={session.user?.image ?? "url('/images/default-avatar.jpg')"}
            alt={session.user?.name ?? "default"}
            className="mb-4"
            sx={{ width: 86, height: 86 }}
          />

          <Typography variant="h3" color={"#1A2130"}>
            Welcome!
          </Typography>
          <Typography
            variant="h6"
            className="mt-6 mb-4"
            fontWeight={"bold"}
            color={"#1A2130"}
          >
            Your data
          </Typography>
          <Card className="p-5 w-full grid gap-2">
            <Typography variant="body1" color={"#1A2130"}>
              Name: {session.user?.name}
            </Typography>
            <Typography variant="body1" color={"#1A2130"}>
              Email: {session.user?.email}
            </Typography>
          </Card>
        </Box>

        <Divider className="mb-4" />

        <Box display="flex" alignItems="center" className="mb-4">
          <Typography variant="h5" color={"#1A2130"} fontWeight={"bold"}>
            Google Drive Files
          </Typography>
        </Box>
        <div className="bg-[#fdfffd] overflow-scroll-y overflow-x-auto h-[400px] w-full rounded-lg flex justify-center items-center">
          {files.length > 0 ? (
            <List>
              {files.map((file: any, index: number) => (
                <ListItem
                  key={file.id}
                  className={index % 2 === 0 ? "bg-[#d6eff3]" : "bg-white"}
                >
                  <ListItemIcon>
                    <FileIcon />
                  </ListItemIcon>
                  <Typography color={"#1A2130"}>{file.name}</Typography>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color={"#1A2130"}>
              No files found.
            </Typography>
          )}
        </div>
      </Box>
      <Button variant="contained" color="secondary" onClick={() => signOut()}>
        <Typography variant="body1" color={"white"}>
          Sign out
        </Typography>
      </Button>
    </section>
  );
};

export default Dashboard;
