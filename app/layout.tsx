import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import MenuContextProvider from "@/context/MenuContext";
import AppContextProvider from "@/context/AppContext";

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
      <body>
        <AppContextProvider>
          <MenuContextProvider>
            <MainLayout>{children}</MainLayout>
          </MenuContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
