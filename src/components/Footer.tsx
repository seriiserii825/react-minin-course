export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-yellow-300">★</span> My Beauty Store
            </h3>
            <p className="mt-4 text-pink-100 text-sm leading-relaxed">
              Your favorite beauty & fragrance destination
              <br />
              Fast delivery across Moldova • 100% authentic products
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-pink-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3 text-pink-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fragrances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Skincare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hair Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nails
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-pink-100 text-sm">
              <p>📱 +373 (69) 123-456</p>
              <p>✉️ hello@mybeauty.md</p>
              <p>📍 Chișinău, Stefan cel Mare bd. 123</p>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-500 mt-12 pt-8 text-center md:flex md:justify-between md:items-center text-sm text-pink-200">
          <p>© 2026 My Beauty Store. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Returns & Refunds
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
