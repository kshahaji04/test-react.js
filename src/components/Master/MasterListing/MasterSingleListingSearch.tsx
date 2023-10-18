const MasterSingleListingSearch = ({ placeholder, HandleSearchInput }: any) => {
  return (
    <div className="container row  mt-2">
      <input
        type="text"
        name="name"
        id="name"
        className="form-control input-fields custom-input-field w-25 py-1 ps-2"
        aria-describedby="emailHelp"
        placeholder={placeholder}
        onChange={HandleSearchInput}
      />
    </div>
  );
};

export default MasterSingleListingSearch;
