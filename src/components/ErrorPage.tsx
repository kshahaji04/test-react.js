
const ErrorPage = () => {
  // const navigate = useNavigate();
  return (
    <div className='container error-page-container'>
      <div className='text-center'>
        <h1>Oops! Something went wrong.</h1>
        <h2>We apologize for the inconvenience.</h2>
        <button
          className='btn btn-primary mt-3'
        // onClick={HandleGoBack} // Use navigate to go back to the homepage or another route
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ErrorPage