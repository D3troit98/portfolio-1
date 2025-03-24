import React from 'react';

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
