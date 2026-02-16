import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Notes App",
  description: "Next.js Notes CRUD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-gray-50 font-sans">
        <Navigation />
        <main className="flex-1 py-8 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
