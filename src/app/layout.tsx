import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Grid2 } from "@mui/material";
import { Sidebar } from "../../components/sidebar";

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
        <Grid2 container>
          <Sidebar testId={""} ></Sidebar>
          <Grid2 size={"grow"}>
            <Grid2 container columns={2}>
              <Grid2 size={12}>search</Grid2>
              <Grid2 size={12}>{children}</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </body>
    </html>
  );
}
