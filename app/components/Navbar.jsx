import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">SAPT</h1>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
