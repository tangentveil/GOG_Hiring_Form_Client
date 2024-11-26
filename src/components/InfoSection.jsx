import bgImage from "../assets/job-5382501_1280.jpg";

const InfoSection = () => {
  return (
    <div className="relative bg-green-100 flex items-center justify-center w-1/2 max-md:hidden h-[600px]">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Green Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-green-700 opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-6">
          Access our pre-trained talent today
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start justify-start gap-2">
            <span className="text-xl">✅</span>
            Hire from our Pan-India Talent pool, across 100+ colleges
          </li>
          <li className="flex items-start justify-start gap-2">
            <span className="text-xl">✅</span>
            Pre-Trained Developers available across 10 profiles
          </li>
          <li className="flex items-start justify-start gap-2">
            <span className="text-xl">✅</span>
            Experience ranging from 0 to 3 years
          </li>
          <li className="flex items-start justify-start gap-2">
            <span className="text-xl">✅</span>
            Available for Full-Time as well as for Internships
          </li>
          <li className="flex items-start justify-start gap-2">
            <span className="text-xl">✅</span>
            Complete recruitment services at no additional cost
          </li>
          <li className="flex items-start justify-start gap-2">
            <span className="text-xl">✅</span>
            Solve your long-term Entry-Level Tech recruitment needs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;
