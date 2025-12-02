import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">MyBrand</h2>
          <p className="text-sm">
            A modern blog made with Next.js & TailwindCSS.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <Link href="#" className="hover:text-white">
              🌐
            </Link>
            <Link href="#" className="hover:text-white">
              🐦
            </Link>
            <Link href="#" className="hover:text-white">
              📸
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © 2025 MyBrand. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
