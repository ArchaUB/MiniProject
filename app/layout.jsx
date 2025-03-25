import CreateTest from "./teacherdashboard/CreateTest/page";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Placement Training",
  description: "Platform for students to prepare for placements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-black to-black to-90% min-h-screen">
        {children}
      </body>
    </html>
  );
}

