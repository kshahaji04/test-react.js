interface HandleButtonsDisplayProps {
  handleCreateChittiSubmit: () => void;
  showButton: number;
  showSubmitButtonAfterCreateChitti: string;
  handleSubmitChittiData: () => void;
  handleCancelChitti: () => void;
  handleDeleteChitti: () => void;
}
const HandleButtonsDisplayInChitti: React.FC<HandleButtonsDisplayProps> = ({
  handleCreateChittiSubmit,
  showButton,
  showSubmitButtonAfterCreateChitti,
  handleSubmitChittiData,
  handleCancelChitti,
  handleDeleteChitti,
  }) => {
  const handleButtonsDisplay = () => {
    if (showButton === 0 && showSubmitButtonAfterCreateChitti?.length > 0) {
      return (
        <>
          {/* <button
            type="submit"
            onClick={HandleEmptyChitti}
            className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
          >
            New
          </button> */}

          <button
            type="submit"
            onClick={handleSubmitChittiData}
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
          onClick={handleCancelChitti}
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
          onClick={handleDeleteChitti}
        >
          Delete
        </button>
      );
    } else {
      return (
        <>
          {/* <button
            type="submit"
            onClick={HandleEmptyChitti}
            className=" btn btn-outline-primary  px-2 py-0 form-submit-button"
          >
            New
          </button> */}
          <button
            type="submit"
            onClick={handleCreateChittiSubmit}
            className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
          >
            Save
          </button>
        </>
      );
    }
  };

  return <>{handleButtonsDisplay()}</>;
};

export default HandleButtonsDisplayInChitti;
