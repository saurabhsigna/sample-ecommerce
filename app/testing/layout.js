import { Inter } from "next/font/google";

const interFont = Inter({
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const metadata = {
  title: "Testing Page",
  description: "I will do testing here - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
