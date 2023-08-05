import { Inter } from "next/font/google";

const interFont = Inter({
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "600", "700"],
});

export const metadata = {
  title: "Testing Page",
  description: "I will do testing here - All For Us",
};

export default function RootLayout({ children }) {
  return <section className={interFont.className}>{children}</section>;
}
