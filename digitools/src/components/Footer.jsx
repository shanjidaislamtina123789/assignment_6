import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[linear-gradient(90deg,#4F39F6_0%,#9514FA_100%)] text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-3">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm opacity-80 mb-6 max-w-xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>

        <div className="flex justify-center gap-4 mb-4">

          <button className="bg-white text-purple-600 px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
            Explore Products
          </button>

          <button className="border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>

        </div>
        <p className="text-xs opacity-70">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

      <div className="bg-[#0F172A] text-white py-14">

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Logo + Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-3">DigiTools</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-semibold mb-3">Social Links</h3>

            <div className="flex gap-3">

              <div className="bg-gray-700 p-2 rounded-full hover:bg-purple-600 transition cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="bg-gray-700 p-2 rounded-full hover:bg-purple-600 transition cursor-pointer">
                <FaTwitter />
              </div>

              <div className="bg-gray-700 p-2 rounded-full hover:bg-purple-600 transition cursor-pointer">
                <FaGithub />
              </div>

            </div>
          </div>

        </div>


        <div className="border-t border-gray-700 mt-10 pt-6">

          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

            <p>© 2026 DigiTools. All rights reserved.</p>

            <div className="flex gap-6 mt-3 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span className="hover:text-white cursor-pointer">Cookies</span>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Footer;



  