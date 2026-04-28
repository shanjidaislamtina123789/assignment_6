const Steps = () => {
  return (
    <div className="py-16 bg-white text-center">

      <h2 className="text-2xl font-bold mb-2">
        Get Started In 3 Steps
      </h2>

      <p className="text-gray-500 mb-10 text-sm">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">

      
        <div className="p-6 border rounded-lg">
          <div className="flex justify-center items-center mb-4">
          <img src="/images/user.png" alt="user" className="w-12 h-12"/>
          </div>
          <h3 className="font-semibold">Create Account</h3>
          <p className="text-sm text-gray-500">
            Sign up for free in seconds.
          </p>
        </div>

      
        <div className="p-6 border rounded-lg">
          <div className="flex justify-center items-center mb-4">
          <img src="/images/package.png" alt="user" className="w-12 h-12"/>
          </div>
          <h3 className="font-semibold">Choose Products</h3>
          <p className="text-sm text-gray-500">
            Browse and select tools.
          </p>
        </div>

      
        <div className="p-6 border rounded-lg">
          <div className="flex justify-center items-center mb-4">
          <img src="/images/rocket.png" alt="user" className="w-12 h-12"/>
          </div>
          <h3 className="font-semibold">Start Creating</h3>
          <p className="text-sm text-gray-500">
            Download and start using instantly.
          </p>
        </div>

      </div>
    </div>
  );
};
export default Steps;
