import React from 'react';
const Pricing = () => {
  return (
    <div className="py-16 bg-gray-50 text-center font-sans">

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

        <div className="bg-white p-6 rounded-xl shadow border text-left flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Starter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Perfect for getting started
            </p>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              $0<span className="text-sm text-gray-400">/Month</span>
            </h2>
            <ul className="text-sm text-gray-500 space-y-3 mb-6">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>
          </div>
   
          <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-2.5 rounded-full font-medium hover:opacity-90 transition-all">
            Get Started Free
          </button>
        </div>


        <div className="relative p-6 rounded-xl text-white text-left bg-[linear-gradient(180deg,#4F39F6_0%,#9514FA_100%)] shadow-lg flex flex-col justify-between">

          <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black font-bold">
            Most Popular
          </span>

          <div>
            <h3 className="font-semibold text-lg">Pro</h3>
            <p className="text-sm opacity-80 mb-4">
              Best for professionals
            </p>
            <h2 className="text-3xl font-bold mb-4">
              $29<span className="text-sm opacity-80">/Month</span>
            </h2>
            <ul className="text-sm space-y-3 mb-6">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>
          </div>
    
          <button className="w-full bg-white text-[#4F39F6] py-2.5 rounded-full font-bold hover:bg-gray-50 transition-all">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border text-left flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-4">
              For teams and businesses
            </p>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              $99<span className="text-sm text-gray-400">/Month</span>
            </h2>
            <ul className="text-sm text-gray-500 space-y-3 mb-6">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>
          </div>
     
          <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-2.5 rounded-full font-medium hover:opacity-90 transition-all">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;


  