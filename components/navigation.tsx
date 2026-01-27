import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              MyWebsite
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600">
                
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
