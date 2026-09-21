import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucineia Gomes | Autonomia emocional nos relacionamentos",
  description: "Aula gratuita para mulheres que desejam superar o medo do abandono e construir relações com mais autonomia e respeito.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
