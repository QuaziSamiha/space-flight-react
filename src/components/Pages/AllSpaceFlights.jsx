import { useState } from "react";
import Flight from "./Flight";
import Pagination from "./Pagination";
function AllSpaceFlights() {
  const [currentFlights, setCurrentFlights] = useState([]);

  // Define a callback function to receive the currentFlights data
  const handleCurrentFlightsChange = (newCurrentFlights) => {
    setCurrentFlights(newCurrentFlights);
  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 gap-3">
          {currentFlights.map((flight, index) => (
            <Flight key={index} flight={flight} />
          ))}
        </div>
      </div>
      <Pagination onCurrentFlightsChange={handleCurrentFlightsChange} />
    </>
  );
}

export default AllSpaceFlights;
