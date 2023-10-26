import { createContext, useContext, useState, useEffect } from "react";

const SpaceFlightsContext = createContext(undefined);

export function useSpaceFlights() {
  const context = useContext(SpaceFlightsContext);
  if (!context) {
    throw new Error(
      "useSpaceFlights must be used within a SpaceFlightsProvider"
    );
  }
  return context;
}

export function SpaceFlightsProvider({ children }) {
  const [allSpaceFlights, setAllSpaceFlights] = useState([]);

  useEffect(() => {
    // Fetch data from the SpaceX API and update allSpaceFlights
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => setAllSpaceFlights(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <SpaceFlightsContext.Provider value={{ allSpaceFlights }}>
      {children}
    </SpaceFlightsContext.Provider>
  );
}
