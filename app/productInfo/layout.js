import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "ProductInfo Page",
  description: "I will do ProductInfo testing here - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
