import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

interface FormData {
  electricity: string;
  gas: string;
  car: string;
  flights: string;
}

const Calculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    electricity: '',
    gas: '',
    car: '',
    flights: '',
  });
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculateEmissions = (data: FormData): number => {
    const electricityEmissions = parseFloat(data.electricity) * 0.5; // kWh to kg CO2
    const gasEmissions = parseFloat(data.gas) * 2.3; // therms to kg CO2
    const carEmissions = parseFloat(data.car) * 0.4; // miles to kg CO2
    const flightEmissions = parseFloat(data.flights) * 250; // flights to kg CO2

    return (electricityEmissions + gasEmissions + carEmissions + flightEmissions) / 1000; // Convert to metric tons
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emissions = calculateEmissions(formData);
    setResult(emissions);
  };

  const downloadPDF = () => {
    if (result === null) return;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Carbon Credit Calculator Results', 20, 20);
    doc.setFontSize(12);
    doc.text(`Your estimated carbon footprint: ${result.toFixed(2)} metric tons of CO2`, 20, 40);
    doc.text('Breakdown:', 20, 60);
    doc.text(`Electricity: ${(parseFloat(formData.electricity) * 0.5 / 1000).toFixed(2)} metric tons`, 30, 70);
    doc.text(`Natural Gas: ${(parseFloat(formData.gas) * 2.3 / 1000).toFixed(2)} metric tons`, 30, 80);
    doc.text(`Car Travel: ${(parseFloat(formData.car) * 0.4 / 1000).toFixed(2)} metric tons`, 30, 90);
    doc.text(`Air Travel: ${(parseFloat(formData.flights) * 250 / 1000).toFixed(2)} metric tons`, 30, 100);
    doc.save('carbon-footprint-report.pdf');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Carbon Credit Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="electricity" className="block mb-1 font-medium">Electricity Usage (kWh/year)</label>
          <input
            type="number"
            id="electricity"
            name="electricity"
            value={formData.electricity}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="gas" className="block mb-1 font-medium">Natural Gas Usage (therms/year)</label>
          <input
            type="number"
            id="gas"
            name="gas"
            value={formData.gas}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="car" className="block mb-1 font-medium">Car Travel (miles/year)</label>
          <input
            type="number"
            id="car"
            name="car"
            value={formData.car}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="flights" className="block mb-1 font-medium">Number of Flights (per year)</label>
          <input
            type="number"
            id="flights"
            name="flights"
            value={formData.flights}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Calculate
        </button>
      </form>
      {result !== null && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p className="mb-4">Your estimated carbon footprint is: <strong>{result.toFixed(2)} metric tons of CO2</strong></p>
          <p className="mb-4">To offset this, you would need approximately {Math.ceil(result)} carbon credits.</p>
          <button onClick={downloadPDF} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Download PDF Report
          </button>
        </div>
      )}
    </div>
  );
};

export default Calculator;