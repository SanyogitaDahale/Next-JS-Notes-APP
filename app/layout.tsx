import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: "contact Manager ",
  description: "A simple contact manager app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <Suspense fallback={<div className="h-16 bg-white border-b" />}>
            <Navbar />
          </Suspense>
          <main className="container mx-auto px-4 py-8"></main>
          {children}
        </div>
      </body>
    </html>
  );
}