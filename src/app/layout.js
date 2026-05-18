import Header from "@/features/navigation/components/Header";
import Footer from "@/features/navigation/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Best advertising Agency In Chandigarh | Panchkula | Mohali",
  description: "We are a leading advertising agency in Chandigarh,zirkpur, Panchkula, and Mohali, offering innovative marketing solutions to help businesses grow and succeed. Our team of experts specializes in creating impactful campaigns that drive results. Contact us today to elevate your brand and reach your target audience effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
