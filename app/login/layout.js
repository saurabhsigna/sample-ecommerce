import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin-ext"], weight: "400", style: "normal" });

export const metadata = {
  title: "Register Page",
  description: "Register Page - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
