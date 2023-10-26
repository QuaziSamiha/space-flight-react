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
      <div className="border border-[#CED4DA] rounded-lg m-5 hover:shadow">
        <div className="flex justify-center p-8">
          <img className="h-32 w-32" src={mission_patch_small} alt="" />
        </div>
        <div className="text-center">
          <p className="text-[#6C757D] font-normal text-base leading-6">
            {" "}
            Lauch Date:
            <span className="text-[#343A40]">{formattedLaunchDate}</span>
          </p>
          <h1 className="py-3 text-2xl font-medium text-[#212529] leading-7">
            {mission_name}
          </h1>
          <p className="text-[#495057] font-normal text-sm leading-5">
            {rocket_name}
          </p>
          <div className="py-12">
            <p className="my-2 text-[#6C757D] font-medium text-base leading-5">
              Launch Status:{" "}
            </p>
            {launch_success === true ? (
              <span className="bg-[#198754] text-[#FFFFFF] leading-3 rounded px-4 py-[7.8px] text-xs font-bold">
                Success
              </span>
            ) : launch_success === false ? (
              <span className="bg-[#DC3545] text-[#FFFFFF] leading-3 rounded px-4 py-[7.8px] text-xs font-bold">
                Failed
              </span>
            ) : (
              <span>Not Mentioned</span>
            )}
          </div>
        </div>
        {/* <p>Upcoming: {upcoming === true ? "true" : "false"}</p> */}
      </div>
    </>
  );
}

export default Flight;
