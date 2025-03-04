import CreateTest from "./teacher-dashboard/CreateTest";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Placement Training",
  description: "Platform for students to prepare for placements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-green-400 to-purple-500 min-h-screen">
        {children}
      </body>
    </html>
  );
}

