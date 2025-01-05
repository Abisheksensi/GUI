const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-">
            Search your house using the 
            <span className="bg-gradient-to-r from-purple-900 to-purple-400 text-transparent bg-clip-text font-bold">
                    {" "}AI

            </span>
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-600 max-w-4xl">
            Find your dream house with the help of our AI-powered search engine.
        </p>

    </div>
  );
};

export default HeroSection