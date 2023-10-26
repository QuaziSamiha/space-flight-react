import { createContext, useContext, useState } from "react";

const SearchContext = createContext(undefined);

function SearchProvider({ children }) {
  const [searchInfo, setSearchInfo] = useState({
    flightName: "",
    launchStatus: "",
    launchDate: "",
    upcomingFlights: false,
    filtered: false,
  });

  return (
    <SearchContext.Provider value={{ searchInfo, setSearchInfo }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export { SearchProvider, useSearch };
