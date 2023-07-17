import { Inter, Sora } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

const soraFont = Sora({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});
export const metadata = {
  title: "Product Page",
  description: "I will do Product testing here - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={soraFont.className}>{children}</body>
    </html>
  );
}
