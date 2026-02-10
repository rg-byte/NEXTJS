import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const linkClass = (path) =>
    router.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-500";

  return (
    <header className="bg-gray-100 shadow">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-bold">My Next.js App</h1>
        <div className="space-x-4">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          <Link href="/blog" className={linkClass("/blog")}>Blog</Link>
        </div>
      </nav>
    </header>
  );
}
