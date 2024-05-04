// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-4 px-8 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo and Home Link */}
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={300}
              height={300}
              alt="Dropship Logo"
              className="h-12 w-12 mr-4 rounded-full  bg-center"
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
