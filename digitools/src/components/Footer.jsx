const Footer = () => {
    return (
      <div className="bg-[#0F172A] text-white py-12">
  
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">
  
          <div>
            <h2 className="text-xl font-bold">DigiTools</h2>
            <p className="text-sm text-gray-400 mt-2">
              Premium digital tools for creators.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="text-sm mt-2 space-y-1 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="text-sm mt-2 space-y-1 text-gray-400">
              <li>About</li>
              <li>Careers</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="text-sm mt-2 space-y-1 text-gray-400">
              <li>Docs</li>
              <li>Support</li>
            </ul>
          </div>
  
        </div>
  
        <div className="text-center text-gray-500 mt-10 text-sm">
          © 2026 DigiTools. All rights reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;
  