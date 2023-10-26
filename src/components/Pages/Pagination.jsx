import { useState } from "react";
import { useSpaceFlights } from "../../context/SpaceFlightContext";

function Pagination({ onCurrentFlightsChange }) {
  const { allSpaceFlights } = useSpaceFlights();
  console.log(allSpaceFlights);

  const [flightsPerPage] = useState(9);
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const totalPages = Math.ceil(allSpaceFlights.length / flightsPerPage);

  // Calculate the index of the first and last launch for the current page
  const indexOfLastLaunch = currentPage * flightsPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - flightsPerPage;

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const newallSpaceFlights = allSpaceFlights.slice(
      indexOfFirstLaunch,
      indexOfLastLaunch
    );
    // Call the callback function to send the newallSpaceFlights to the parent
    onCurrentFlightsChange(newallSpaceFlights);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section>
        {/* pagination */}
        <div className="my-16 text-center">
          <button
            onClick={prevPage}
            className="border border-blue-700 text-blue-700 p-2"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={
                currentPage === index + 1
                  ? "border border-blue-700 bg-blue-700 text-white p-2"
                  : "border  border-blue-700 text-blue-700 p-2"
              }
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            className="border border-blue-700 text-blue-700 p-2"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default Pagination;
