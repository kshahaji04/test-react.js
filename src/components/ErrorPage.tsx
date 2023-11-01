const ErrorPage = () => {
  return (
    <div className="container error-page-container">
      <div className="text-center">
        <h4>Oops! Something went wrong.</h4>
        <h6>There was a problem processing the request.</h6>
        <h6> Please try again.</h6>
        {/* <h6>To redirect to homepage</h6> */}
        <a href="/master">
          <button className="btn btn-primary mt-3 py-1">Go Back</button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
