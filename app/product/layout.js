import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Product Page",
  description: "I will do Product testing here - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
