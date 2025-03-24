import type { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Solutions Platforms",
  description: "Get world class tutoring from world class tutors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="min-h-screen w-full">{children}</main>
    </div>
  );
}
