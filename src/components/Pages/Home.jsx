import AllFlights from "./AllFlights";

function Home() {
  return (
    <>
      <div>
        <div>
          <h1>Spaceflight Details</h1>
          <p>
            <small>
              Find out the elaborate features of all the past big spaceflights
            </small>
          </p>
        </div>
        <section>
          <AllFlights />
        </section>
      </div>
    </>
  );
}

export default Home;
