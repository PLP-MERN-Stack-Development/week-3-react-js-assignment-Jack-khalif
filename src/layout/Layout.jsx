import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
