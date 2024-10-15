import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Our Carbon Credit Calculator</h1>
      <p className="mb-4">
        Our carbon credit calculator is designed to help individuals and businesses estimate their carbon footprint and understand how many carbon credits they might need to offset their emissions.
      </p>
      <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">Input your data: Enter information about your energy usage, transportation, and other activities that contribute to your carbon footprint.</li>
        <li className="mb-2">Calculation: Our algorithm uses standardized emission factors to convert your input into an estimated carbon footprint measured in metric tons of CO2 equivalent (tCO2e).</li>
        <li className="mb-2">Results: We provide you with your estimated carbon footprint and suggest the number of carbon credits needed to offset your emissions.</li>
        <li>Report: You can download a detailed PDF report of your results for further analysis or record-keeping.</li>
      </ol>
      <p className="mb-4">
        It's important to note that while our calculator provides a good estimate, it may not capture all sources of emissions. For the most accurate results, consider a professional carbon audit.
      </p>
      <p>
        By understanding your carbon footprint, you can take informed steps to reduce your impact on the environment and support global efforts to combat climate change.
      </p>
    </div>
  );
};

export default About;