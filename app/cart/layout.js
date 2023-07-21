import { Cambay } from "next/font/google";

const cambay = Cambay({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Cart Page",
  description: "Cart Page - All For Us",
};

export default function RootLayout({ children }) {
  return <section className={cambay.className}>{children}</section>;
}
