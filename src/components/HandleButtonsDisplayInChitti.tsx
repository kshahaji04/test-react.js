const HandleButtonsDisplayInChitti = ({
  HandleCreateChittiSubmit,
  showButton,
  showSubmitButtonAfterCreateChitti,
  HandleSubmitChittiData,
  HandleCancelChitti,
  HandleDeleteChitti,
  HandleEmptyChitti,
}: any) => {
  const HandleButtonsDisplay: any = () => {
    if (showButton === 0 && showSubmitButtonAfterCreateChitti?.length > 0) {
      return (
        <>
          <button
            type="submit"
            onClick={HandleEmptyChitti}
            className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
          >
            New
          </button>

          <button
            type="submit"
            onClick={HandleSubmitChittiData}
            className=" btn btn-outline-primary px-2 py-0 form-submit-button"
          >
            Submit
          </button>
        </>
      );
    }
    if (showButton === 1 && showSubmitButtonAfterCreateChitti?.length > 0) {
      return (
        <button
          type="submit"
          className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
          onClick={HandleCancelChitti}
        >
          Cancel
        </button>
      );
    }
    if (showButton === 2 && showSubmitButtonAfterCreateChitti?.length > 0) {
      return (
        <button
          type="submit"
          className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
          onClick={HandleDeleteChitti}
        >
          Delete
        </button>
      );
    } else {
      return (
        <>
          <button
            type="submit"
            onClick={HandleEmptyChitti}
            className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
          >
            New
          </button>
          <button
            type="submit"
            onClick={HandleCreateChittiSubmit}
            className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
          >
            Save
          </button>
        </>
      );
    }
  };

  return <>{HandleButtonsDisplay()}</>;
};

export default HandleButtonsDisplayInChitti;
