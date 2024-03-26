const LoadMoreTableDataInMaster = ({ handleTableViewRows }: any) => {
  return (
    <div
      className="btn-group mr-2 my-2 mb-4"
      role="group"
      aria-label="Second group"
    >
      <button
        type="button"
        className="btn btn-primary py-0 load-more-table-data-btn text-white"
        onClick={() => handleTableViewRows(20)}
      >
        20
      </button>
      <button
        type="button"
        className="btn btn-primary  py-0 load-more-table-data-btn text-white"
        onClick={() => handleTableViewRows(100)}
      >
        100
      </button>
      <button
        type="button"
        className="btn btn-primary  py-0 load-more-table-data-btn text-white"
        onClick={() => handleTableViewRows(500)}
      >
        500
      </button>
    </div>
  );
};

export default LoadMoreTableDataInMaster;
