const MasterSingleListingSearch = ({
  placeholder,
  handleSearchInput,
  listingData,
  tableViewData,
}: any) => {
  return (
    <div className="container d-flex justify-content-between mt-2">
      <div className="">
        <input
          type="text"
          name="name"
          id="name"
          className="form-control input-fields   py-1 ps-2"
          aria-describedby="emailHelp"
          placeholder={placeholder}
          onChange={handleSearchInput}
        />
      </div>
      <div className="d-flex align-items-end">
        {listingData?.length > 0 && (
          <div className="text-end text-gray">
            {listingData?.slice(0, tableViewData)?.length} of{' '}
            {listingData?.length < 10
              ? '0' + listingData?.length
              : listingData?.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterSingleListingSearch;
