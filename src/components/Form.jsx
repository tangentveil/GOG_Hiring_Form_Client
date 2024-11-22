import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const [hiringProfile, setHiringProfile] = useState("");
  const [source, setSource] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Prepare the data to send
    const rowData = [
      name,
      company,
      email,
      contact,
      designation,
      hiringProfile,
      source,
      new Date().toLocaleString(), // Adding a timestamp for reference
    ];

    console.log("Submitted Data: ", rowData);

    try {
      // Send data to the backend
      const response = await axios.post(
        "https://gog-hiring-form-server.onrender.com/add-row",
        {
          rowData,
        }
      );
      setIsLoading(false);

      navigate("/thank-you");
    } catch (error) {
      setIsLoading(false);
      console.error("Error adding data:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col shadow-lg rounded-lg bg-white p-6 gap-4 w-1/2 max-md:w-11/12"
    >
      <h3 className="text-gray-700 text-xl font-bold mb-6">Get in touch</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="email"
        placeholder="Work email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="text"
        placeholder="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <select
        value={hiringProfile}
        onChange={(e) => setHiringProfile(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      >
        <option value="" disabled>
          Hiring Profile
        </option>
        <option value="SDE">SDE</option>
        <option value="Full Stack Developers">Full Stack Developers</option>
        <option value="Frontend Developers">Frontend Developers</option>
        <option value="Backend Developers">Backend Developers</option>
        <option value="Java Developers">Java Developers</option>
        <option value="Data Scientists">Data Scientists</option>
        <option value="Android Developers">Android Developers</option>
        <option value="ML Engineers">ML Engineers</option>
        <option value="Python Developers">Python Developers</option>
        <option value="C++ Developers">C++ Developers</option>
      </select>

      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      >
        <option value="" disabled>
          How did you hear about us?
        </option>
        <option value="Hirist">Hirist</option>
        <option value="Employee Recommendation">Employee Recommendation</option>
        <option value="LinkedIn Ads">LinkedIn Ads</option>
        <option value="Google Search">Google Search</option>
        <option value="IIMJobs Magazine">IIMJobs Magazine</option>
        <option value="Word of Mouth">Word of Mouth</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white p-3 rounded-md hover:opacity-90"
      >
        {isLoading ? "SUBMITTING" : "GET IN TOUCH"}
      </button>
    </form>
  );
};

export default Form;
