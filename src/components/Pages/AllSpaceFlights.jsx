import { useState } from "react";
import Flight from "./Flight";
import Pagination from "./Pagination";
import { useSpaceFlights } from "../../context/SpaceFlightContext";
function AllSpaceFlights() {
  const { allSpaceFlights } = useSpaceFlights();
  const initialFLights = allSpaceFlights.slice(0, 9);
  // console.log(initialFLights);
  const [currentFlights, setCurrentFlights] = useState([]);
  const [paginationUsed, setPaginationUsed] = useState(false);
  // Define a callback function to receive the currentFlights data
  const handleCurrentFlightsChange = (newCurrentFlights) => {
    setCurrentFlights(newCurrentFlights);
    setPaginationUsed(true);
  };
  return (
    <>
      <div>
        {paginationUsed === true ? (
          <>
            <div className="md:grid md:grid-cols-3 gap-3">
              {currentFlights.map((flight, index) => (
                <Flight key={index} flight={flight} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="md:grid md:grid-cols-3 gap-3">
              {initialFLights.map((flight, index) => (
                <Flight key={index} flight={flight} />
              ))}
            </div>
          </>
        )}
      </div>
      <Pagination onCurrentFlightsChange={handleCurrentFlightsChange} />
    </>
  );
}

export default AllSpaceFlights;
