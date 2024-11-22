import InfoSection from "../components/InfoSection";
import Form from "../components/Form";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mx-[100px] max-xl:mx-[50px] max-sm:m-[20px]">
      <InfoSection />
      <Form />
    </div>
  );
};

export default LandingPage;
