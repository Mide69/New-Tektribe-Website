import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tek Tribe",
  description: "Tek Tribe | Digital empowerment for social good",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"white-version"}>{children}</body>
    </html>
  );
}
