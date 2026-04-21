import Header from "@/features/navigation/components/Header";
import "./globals.css";

export const metadata = {
  title: "Best Digital Marketing Institute In Chandigarh | Panchkula | Mohali",
  description: "Looking for digital marketing institute nearby? Join Imazine Us Academy - the best digital marketing institute in Chandigarh, Panchkula and Mohali today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
