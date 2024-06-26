import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata } from "next";
import "./globals.css";
// import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "To Do App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: typeChildren) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}