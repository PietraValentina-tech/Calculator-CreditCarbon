import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to Carbon Credit Calculator</h1>
      <p className="mb-4">
        Carbon credits are a vital tool in the fight against climate change. They represent a reduction or removal of greenhouse gases from the atmosphere, helping to offset emissions and promote sustainable practices.
      </p>
      <p className="mb-4">
        By understanding and utilizing carbon credits, individuals and organizations can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Offset their carbon footprint</li>
        <li>Support renewable energy projects</li>
        <li>Contribute to forest conservation efforts</li>
        <li>Promote sustainable development globally</li>
      </ul>
      <p className="mb-6">
        Our calculator helps you estimate your carbon footprint and determine how many carbon credits you might need to offset your emissions.
      </p>
      <Link to="/calculator" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Try Our Calculator
      </Link>
    </div>
  );
};

export default Home;