const ErrorPage = () => {
  return (
    <div className="container error-page-container">
      <div className="text-center">
        <h1>Oops! Something went wrong.</h1>
        <h2>We apologize for the inconvenience.</h2>
        <a href="/master">
          <button className="btn btn-primary mt-3">Go Back</button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
