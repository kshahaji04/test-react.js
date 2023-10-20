const MasterSingleListingSearch = ({ placeholder, HandleSearchInput }: any) => {
  return (
    <div className="container row  mt-2">
      <div className="col-lg-3 col-8">
        <input
          type="text"
          name="name"
          id="name"
          className="form-control input-fields   py-1 ps-2"
          aria-describedby="emailHelp"
          placeholder={placeholder}
          onChange={HandleSearchInput}
        />
      </div>
    </div>
  );
};

export default MasterSingleListingSearch;
