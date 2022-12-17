import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row } from "reactstrap";
import Chart from "./components/Chart";

function App() {
  const [type, setType] = useState("temperature");
  return (
    <div className="App">
      <Container>
        <h2>IoT Dashboard</h2>
        <Row>
          <div className="col-md-4">
            <Button
              color={type === "temperature" ? "success" : "primary"}
              onClick={e => setType("temperature")}
            >
              Temperature
            </Button>
          </div>
          <div className="col-md-4">
            <Button
              color={type === "humidity" ? "success" : "primary"}
              onClick={e => setType("humidity")}
            >
              Humidity
            </Button>
          </div>
          <div className="col-md-4">
            <Button
              color={type === "pressure" ? "success" : "primary"}
              onClick={e => setType("pressure")}
            >
              Pressure
            </Button>
          </div>
        </Row>
        <Row>
          <div className="col-md-12">
            {type === "temperature" &&
              <Chart
                title="Temperature °C"
                label="Temperature °C"
                type="temperature"
              />}
            {type === "humidity" &&
              <Chart title="Humidity %" label="Humidity %" type="humidity" />}
            {type === "pressure" &&
              <Chart
                title="Pressure millibars"
                label="Pressure millibars"
                max={2000}
                type="pressure"
              />}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
