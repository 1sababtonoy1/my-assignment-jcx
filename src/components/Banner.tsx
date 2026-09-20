import BannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="my-7 min-h-[500px] flex items-center">
            
            <div className="container mx-auto flex items-center justify-between px-6">

                {/* Left Side */}
                <div className="w-1/2">

                    <h1 className="text-6xl font-bold leading-[1.05] text-[#111827]">
                        Build Your Ideal
                        <br />

                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex gap-3">

                        <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 font-medium text-white transition hover:opacity-90">
                            Explore Technologies
                        </button>

                        <button className="rounded-lg border border-slate-200 bg-white px-8 py-3 font-medium text-slate-600 transition hover:bg-slate-50">
                            Learn More
                        </button>

                    </div>

                </div>


                {/* Right Side */}
                <div className="flex w-1/2 justify-center">

                    <img
                        src={BannerImage}
                        alt="Development Stack"
                        className="w-[450px] object-contain"
                    />

                </div>

            </div>

        </section>
    );
};

export default Banner;