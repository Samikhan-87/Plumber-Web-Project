import { choose } from '../functions/choose'

const Choose = () => {
  return (
    <div className="relative flex flex-col space-y-8 p-12 md:mx-5 my-8 choose text-white gap-7 rounded-2xl overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-48 translate-y-48" />
      
      <div className="relative flex flex-col justify-center items-center">
        <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-white/20">WHY CHOOSE US</span>
        <h2 className="text-center text-[32px] font-bold">Why Choose Us</h2>
        <div className="flex justify-center my-4">
          <span className="w-16 h-1 bg-blue-400 rounded-full"></span>
          <span className="w-4 h-1 bg-blue-300 rounded-full mx-1"></span>
        </div>
        <p className="text-center text-gray-200 max-w-xl text-[16px]">
          Choosing us as your plumber means you will be getting a reliable and
          experienced professional who has the expertise to deliver quality
          services
        </p>
      </div>
      <div className="relative sm:mx-5 md:mx-20 lg:mx-40 flex flex-col space-y-4">
        {choose.map((c, index) => (
          <div className="group flex space-x-4 items-start p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10" key={index}>
            <div className="p-3 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
              {c.icon}
            </div>
            <span>
              <p className="font-bold text-[18px] group-hover:text-blue-300 transition-colors duration-300">{c.name}</p>
              <p style={{ fontSize: "14px" }} className="text-gray-300 mt-1">
                {c.summary}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
