import { useState } from "react";
import { useSpaceFlights } from "../../context/SpaceFlightContext";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

function Pagination({ onCurrentFlightsChange }) {
  const { allSpaceFlights } = useSpaceFlights();
  // console.log(allSpaceFlights);

  const [flightsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allSpaceFlights.length / flightsPerPage);

  // Calculate the index of the first and last launch for the current page
  const indexOfLastLaunch = currentPage * flightsPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - flightsPerPage;

  const contentChange = () => {
    const newallSpaceFlights = allSpaceFlights.slice(
      indexOfFirstLaunch,
      indexOfLastLaunch
    );
    // Call the callback function to send the newallSpaceFlights to the parent
    onCurrentFlightsChange(newallSpaceFlights);
  };
  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    contentChange();
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      contentChange();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      contentChange();
    }
  };

  return (
    <>
      <section>
        {/* pagination */}
        <div className="my-16 pt-0 text-sm text-[#0D6EFD] text-center flex items-end justify-center">
          <div className="w-8 h-9 flex items-center justify-center  border border-[#DEE2E6]">
            <div>
              <button onClick={prevPage} className="">
                <ChevronLeftIcon className="w-8 h-8 p-2" />
              </button>
            </div>
          </div>{" "}
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
          <div className="w-8 h-9  flex items-center justify-center border border-[#DEE2E6]">
            <div>
              <button onClick={nextPage} className="">
                <ChevronRightIcon className="w-10 h-10 p-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pagination;
