export async function getGoogleDriveFiles(accessToken: string) {
  const response = await fetch("https://www.googleapis.com/drive/v3/files", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch files from Google Drive");
  }

  const data = await response.json();
  return data.files;
}
