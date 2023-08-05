import { Barlow } from "next/font/google";

const poppinsFont = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata = {
  title: "Success Page",
  description:
    "Product Purchased see in the orders section for more - All For Us",
};

export default function RootLayout({ children }) {
  return <section className={poppinsFont.className}>{children}</section>;
}
