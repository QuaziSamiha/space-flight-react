function Flight({ flight }) {
  // console.log(flight);

  const { mission_name, rocket, launch_success, links, launch_date_utc } =
    flight;
  const { rocket_name } = rocket;
  const { mission_patch_small } = links;
  const launchDate = new Date(launch_date_utc);

  const dateFormatOptions = {
    year: "numeric",
    month: "short", // Display the month in short form (e.g., "Aug" for August)
    day: "numeric",
  };
  // Format the date
  const formattedLaunchDate = new Intl.DateTimeFormat(
    "en-US",
    dateFormatOptions
  ).format(launchDate);

  return (
    <>
      <div className="border m-5">
        <img src={mission_patch_small} alt="" />
        <h1>{mission_name}</h1>
        <p>{rocket_name}</p>
        <p>Lauch Date: {formattedLaunchDate}</p>
        <p>
          Launch Status:{" "}
          {launch_success === true ? (
            <span className="text-green-500">Success</span>
          ) : launch_success === false ? (
            <span className="text-red-500">Failed</span>
          ) : (
            <span>Not Mentioned</span>
          )}
        </p>
      </div>
    </>
  );
}

export default Flight;
