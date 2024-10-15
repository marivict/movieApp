import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Grid2 } from "@mui/material";
import { SearchBar, Sidebar  } from "../../components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Entertaiment App",
  description: "Example page for entertaiment app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Grid2 container spacing={6} sx={{marginTop: "50px"}}>
          <Grid2>
            <Sidebar testId={"sidebar"} />
          </Grid2>
          <Grid2 size={10}>
            <Grid2 container columns={2} direction={"column"}>
              <Grid2 sx={{marginTop: "20px"}} size={12}><SearchBar /></Grid2>
              <Grid2 size={12}>{children}</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </body>
    </html>
  );
}
