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
              onClick={setType("temperature")}
            >
              Temperature
            </Button>
          </div>
          <div className="col-md-4">
            <Button
              color={type === "humidity" ? "success" : "primary"}
              onClick={setType("humidity")}
            >
              Humidity
            </Button>
          </div>
          <div className="col-md-4">
            <Button
              color={type === "pressure" ? "success" : "primary"}
              onClick={setType("pressure")}
            >
              Pressure
            </Button>
          </div>
        </Row>
        <Row>
          <div className="col-md-12">
            {/* {type === "temperature" && */}
            <Chart title="Temperature" label="Temperature" type="temperature" />
            {/* }
            {type === "humidity" &&
              <Chart title="Humidity" label="Humidity" type="humidity" />}
            {type === "pressure" &&
              <Chart title="Pressure" label="Pressure" type="pressure" />} */}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
