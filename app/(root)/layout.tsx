import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="min-h-[100dvh] w-full">{children}</div>
    </div>
  );
}
