"use client";

import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
// import Footer from "./components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
