import { Cambay } from "next/font/google";

const cambay = Cambay({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Cart Page",
  description: "Cart Page - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cambay.className}>{children}</body>
    </html>
  );
}
