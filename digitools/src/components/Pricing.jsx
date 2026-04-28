const Pricing = () => {
  return (
    <div className="py-16 bg-gray-50 text-center">

      <h2 className="text-2xl font-bold mb-2">
        Simple, Transparent Pricing
      </h2>

      <p className="text-gray-500 mb-10 text-sm">
        Choose the plan that fits your needs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold">Starter</h3>
          <h2 className="text-2xl font-bold">$0</h2>

          <ul className="text-sm my-4">
            <li>✔ Basic tools</li>
            <li>✔ Community support</li>
          </ul>

          <button className="btn btn-primary w-full">
            Get Started Free
          </button>
        </div>

        <div className="p-6 rounded-lg text-white bg-[linear-gradient(90deg,#4F39F6,#9514FA)] scale-105 shadow-lg">
          <h3 className="font-bold">Pro</h3>
          <h2 className="text-2xl font-bold">$29/month</h2>

          <ul className="text-sm my-4">
            <li>✔ All premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="btn bg-white text-purple-600 w-full">
            Start Free Trial
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold">Enterprise</h3>
          <h2 className="text-2xl font-bold">$99</h2>

          <ul className="text-sm my-4">
            <li>✔ Everything in Pro</li>
            <li>✔ Dedicated support</li>
          </ul>

          <button className="btn btn-primary w-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;

  