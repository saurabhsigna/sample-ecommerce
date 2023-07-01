import { Open_Sans } from "next/font/google";

const poppinsFont = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export const metadata = {
  title: "Orders Page",
  description:
    "Product Purchased see in the orders section for more - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>{children}</body>
    </html>
  );
}
