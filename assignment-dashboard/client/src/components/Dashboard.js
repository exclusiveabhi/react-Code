import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'; //for displaying chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// Sir here i use statemanagment useState for filter the data
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    year: '',
    topics: '',
    sector: '',
    region: '',
    pest: '',
    source: '',
    swot: '',
    country: '',
    city: ''
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = () => {
    axios.get('/api/data', { params: filters })
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const chartData = {
    labels: data.map(d => d.country),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(d => d.intensity),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      }
    ]
  };

  return (
    <div>
      <h2>Data Visualization Dashboard Assignment</h2>
      <div>
        <label>Year</label>
        <input type="text" name="year" onChange={handleFilterChange} />
        <label>Topics</label>
        <input type="text" name="topics" onChange={handleFilterChange} />
        <label>Sector</label>
        <input type="text" name="sector" onChange={handleFilterChange} />
        <label>Region</label>
        <input type="text" name="region" onChange={handleFilterChange} />
        <label>PEST</label>
        <input type="text" name="pest" onChange={handleFilterChange} />
        <label>Source</label>
        <input type="text" name="source" onChange={handleFilterChange} />
        <label>SWOT</label>
        <input type="text" name="swot" onChange={handleFilterChange} />
        <label>Country</label>
        <input type="text" name="country" onChange={handleFilterChange} />
        <label>City</label>
        <input type="text" name="city" onChange={handleFilterChange} />
      </div>
      <Bar data={chartData} />
    </div>
  );
};

export default Dashboard;
