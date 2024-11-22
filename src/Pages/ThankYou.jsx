const ThankYou = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-500">Form Submitted Successfully!</h1>
        <p className="mt-4 text-gray-600">Thank you for getting in touch. We will contact you shortly.</p>
        <a
          href="/"
          className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
