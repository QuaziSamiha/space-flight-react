import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-3xl md:mb-4 md:text-4xl lg:text-5xl font-bold text-red-600">
            Oops!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-4">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="italic text-base md:text-lg lg:text-xl text-blue-600">
            {error?.statusText || error?.message}
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
