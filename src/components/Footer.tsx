// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F2F6FF] text-black-800 py-10 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-500">Discover</h4>
          <p className="text-gray-500">
            Built by sellers for sellers with the mission to help entrepreneurs
            start and grow successful businesses.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Dropship FZCO
            <br />
            Premises No: 33007-001, IFZA Business Park, Dubai Silicon Oasis,
            DDP, Building A1
            <br />
            United Arab Emirates
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-500">Products</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/product-database">
                <div className="text-gray-500 hover:text-blue-500">
                  Product Database
                </div>
              </Link>
            </li>
            <li>
              <Link href="/sales-tracker">
                <div className="text-gray-500 hover:text-blue-500">
                  Sales Tracker
                </div>
              </Link>
            </li>
            <li>
              <Link href="/top-stores">
                <div className="text-gray-500 hover:text-blue-500">
                  Top Stores
                </div>
              </Link>
            </li>
            <li>
              <Link href="/top-products">
                <div className="text-gray-500 hover:text-blue-500">
                  Top Products
                </div>
              </Link>
            </li>
            <li>
              <Link href="/competitor-research">
                <div className="text-gray-500 hover:text-blue-500">
                  Competitor Research
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-500">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/pricing">
                <div className="text-gray-500 hover:text-blue-500">Pricing</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="text-gray-500 hover:text-blue-500">About</div>
              </Link>
            </li>
            <li>
              <Link href="/affiliate">
                <div className="text-gray-500 hover:text-blue-500">
                  Affiliate Program
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="text-gray-500 hover:text-blue-500">Contact</div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-500">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/blog">
                <div className="text-gray-500 hover:text-blue-500">Blog</div>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <div className="text-gray-500 hover:text-blue-500">
                  Community
                </div>
              </Link>
            </li>
            <li>
              <Link href="/university">
                <div className="text-gray-500 hover:text-blue-500">
                  Dropship University
                </div>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <div className="text-gray-500 hover:text-blue-500">FAQs</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-xs text-gray-500">
          © 2024 Dropship. All Rights Reserved.
        </p>
        <p className="text-center text-xs text-gray-500">
          Cookie | Privacy | Terms
        </p>
      </div>
    </footer>
  );
};

export default Footer;
