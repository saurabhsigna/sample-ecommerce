import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: "400", style: "normal" });

export const metadata = {
  title: "Login Page",
  description: "Login Page - All For Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
