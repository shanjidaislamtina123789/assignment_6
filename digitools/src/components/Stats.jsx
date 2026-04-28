const Stats = () => {
  return (
    <div className="bg-[linear-gradient(90deg,#4F39F6_0%,#9514FA_100%)] py-12">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">

        <div className="py-6 md:border-r md:border-white/30">
          <h2 className="text-3xl font-bold">50K+</h2>
          <p className="text-sm mt-1 opacity-80">Active Users</p>
        </div>


        <div className="py-6 md:border-r md:border-white/30">
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="text-sm mt-1 opacity-80">Premium Tools</p>
        </div>

        <div className="py-6">
          <h2 className="text-3xl font-bold">4.9</h2>
          <p className="text-sm mt-1 opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;


  