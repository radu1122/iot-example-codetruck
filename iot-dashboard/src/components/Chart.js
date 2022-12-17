import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Button } from "reactstrap";
import moment from "moment";

export default function Chart(props) {
  const [data, setData] = React.useState(null);

  async function fetchData() {
    const result = await axios.get(
      `http://18.159.135.221:5100/api/${props.type}`
    );
    console.log(result);
    setData({
      labels: result.data.elements.map(d =>
        moment(d.addedDate).format("DD/MM/YYYY HH:mm:ss")
      ),
      datasets: [
        {
          label: props.label,
          data: result.data.elements.map(d => d.value),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.5)"
        }
      ]
    });
  }

  React.useEffect(() => {
    // fetch data every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: false,
        text: props.title
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date"
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value"
        },
        // set scale 0 to 100
        min: 0,
        max: props.max ? props.max : 50
      }
    }
  };

  if (!data)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
