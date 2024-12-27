import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import axios from "axios";

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title, Tooltip);

const LineChart = () => {
    const [sicaklik, setSicaklik] = useState([]);
    const [nem, setNem] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/dht')
  .then(response => {
    // Sıcaklık verilerini al
    let sicaklikTemp = [];
    for (let i = 0; i < 100; i++) {
        const temp = response.data.dht[i]?.temperature;
        sicaklikTemp.push(temp)// i değerini dizimize ekliyoruz
     //   console.log('Veriler:', response.data.dht[i]?.temperature); // Gelen verileri konsola yazdır
    }
    setSicaklik(sicaklikTemp);

    // Nem verilerini al
    let nemTemp = [];
    for (let i = 0; i < 100; i++) {
        const temp = parseInt(response.data.dht[i]?.humidity);
        nemTemp.push(temp)// i değerini dizimize ekliyoruz
    //    console.log('Veriler:', response.data.dht[i]?.humidity); // Gelen verileri konsola yazdır
    }
    setNem(nemTemp);
    console.log('Nem:', nemTemp);

  })
  .catch(error => {
    console.error('Hata:', error); // Hata durumunda mesaj yazdır
  });

    }, []);

    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);  // i değerini dizimize ekliyoruz
    } 

   
    console.log('Sıcaklık:', sicaklik);

    
  // Sample data for the chart
  const data = {
    labels: numbers,
    datasets: [
      {
        label: "Sıcaklık",
        data: sicaklik,// Data points
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color of data points
        tension: 0.4, // Line tension (0: straight, 1: very curved)
        pointRadius: 5, // Size of data points
      },
    ],
  };
  const data2 = {
    labels: numbers,
    datasets: [
      {
        label: "Nem",
        data: nem, // Data points
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color of data points
        tension: 0.4, // Line tension (0: straight, 1: very curved)
        pointRadius: 5, // Size of data points
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Sıcaklık",
      },
    },
    scales: {
        x: {
          beginAtZero: true,min: 0,max: 100
        },
        y: {
          beginAtZero: true,min: 20,max: 30
        },
  }};
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Nem",
      },
    },
    scales: {
        x: {
          beginAtZero: true,min: 0,max: 100
        },
        y: {
            title: {
                display: true,
                text: 'Nem(%)'
            },
          beginAtZero: true,min: 30,max: 100
        },
  }};

  return (
    <div style={{ width: "1800px", height: "500px" }}>
      <Line data={data2} options={options2} />
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;