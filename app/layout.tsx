import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import MenuContextProvider from "@/context/MenuContext";
import AppContextProvider from "@/context/AppContext";
import { lusitana } from "@/components/fonts";

export const metadata: Metadata = {
  title: "admin panel",
  description: "Generated by admin panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
