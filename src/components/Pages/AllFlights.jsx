import { useEffect, useState } from "react";
import Flight from "./Flight";

function AllFlights() {
  const [allFlights, setAllFlights] = useState([]);

  useEffect(() => {
    // Fetch data from the SpaceX API
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Set the retrieved data to the allFlights state
        setAllFlights(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //   console.log(allFlights);
  return (
    <>
      <div className="md:grid md:grid-cols-3 gap-3">
        {allFlights.map((flight, index) => (
          <Flight key={index} flight={flight} />
        ))}
      </div>
    </>
  );
}

export default AllFlights;
