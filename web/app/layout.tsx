import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenfundr",
  description: "Monorepo web experience for Greenfundr.",
};

export default function RootLayout(
  props: Readonly<{ children: ReactNode }>,
): JSX.Element {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
