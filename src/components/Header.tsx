// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-4 px-8 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo and Home Link */}
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/path-to-your-logo.png"
              alt="Dropship Logo"
              className="h-8 mr-4"
            />
            <span className="hidden md:block font-semibold text-xl text-red-600">
              Dropship
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="ml-10 hidden lg:flex items-center space-x-4">
          <Link href="/products">
            <div className="text-gray-600 hover:text-gray-900">Products</div>
          </Link>
          <Link href="/resources">
            <div className="text-gray-600 hover:text-gray-900">Resources</div>
          </Link>
          <Link href="/pricing">
            <div className="text-gray-600 hover:text-gray-900">Pricing</div>
          </Link>
        </nav>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center">
        <Link href="/login">
          <div className="text-gray-600 hover:text-gray-900 px-4">Log In</div>
        </Link>
        <Link href="/signup">
          <div className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow">
            Start Free Trial
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
