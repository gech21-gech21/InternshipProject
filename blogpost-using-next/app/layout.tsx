"use client";
import Link from "next/link";
import "./globals.css";

export default function Layout({
  children,
  footer,
  header,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        =
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-4">
          <nav className="flex justify-center space-x-6">
            <Link
              className="text-blue-600 hover:text-blue-800 shadow-md w-40 bg-amber-200 px-4 py-2 rounded-lg text-center font-medium transition-colors"
              href="/first"
            >
              First Project
            </Link>
            <Link
              className="text-green-600 hover:text-green-800 shadow-md w-40 bg-amber-200 px-4 py-2 rounded-lg text-center font-medium transition-colors"
              href="/blogpost"
            >
              Blog Posts
            </Link>
          </nav>
        </header>
        <main className="flex-grow pt-24 pb-16 px-4">{children}</main>
        <footer className="w-full p-4 bg-gray-100 text-center border-t border-gray-200">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
