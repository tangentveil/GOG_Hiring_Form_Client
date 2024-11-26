import InfoSection from "../components/InfoSection";
import Form from "../components/Form";

const LandingPage = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center mx-[100px] max-xl:mx-[50px] max-sm:m-[20px]">
      {/* Top-left Triangle */}
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[400px] max-md:border-l-[300px] border-b-[400px] max-md:border-b-[300px] max-sm:border-l-[200px] max-sm:border-b-[200px] border-l-green-500 border-b-transparent z-0"></div>
      {/* Bottom-right Triangle */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[400px] border-t-[400px] max-md:border-r-[300px] max-md:border-t-[300px] max-sm:border-t-[200px] max-sm:border-r-[200px] border-t-transparent border-r-green-500 z-0"></div>

      <InfoSection />
      <Form />
    </div>
  );
};

export default LandingPage;
