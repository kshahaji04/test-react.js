const ChittiListing = () => {
  return (
    <>
      <div className="container">
        <table className="table table table-striped table-hover listing-table">
          <thead className="table-heading">
            <tr className="table-heading-row">
              <th className="sr-width" scope="col">
                Sr No.
              </th>
              <th className="" scope="col">
                Date
              </th>
              <th className="" scope="col">
                Chitti No
              </th>
              <th className="" scope="col">
                Client Name
              </th>
              <th className="" scope="col">
                Status
              </th>
              <th className="w-25" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-body-row">
              <td scope="row">1</td>
              <td>20/09/2023</td>
              <td>001</td>
              <td>Jhon</td>
              <td>draft</td>
              <td className="button-section-td">
                <button className="btn btn-primary px-lg-2 py-0"><span className="button-section-text">Edit</span></button>
                <button className="btn btn-success px-lg-2 py-0 mx-2">
                  <span className="button-section-text">
                    Print
                  </span>
                </button>
                <button className="btn btn-danger px-lg-2 py-0">
                  <span className="button-section-text">Delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td scope="row ">2</td>
              <td>04/06/2023</td>
              <td>002</td>
              <td>Reena</td>
              <td>draft</td>
              <td className="button-section-td">
                <button className="btn btn-primary px-lg-2 py-0"><span className="button-section-text">Edit</span></button>
                <button className="btn btn-success px-lg-2 py-0 mx-2">
                  <span className="button-section-text">
                    Print
                  </span>
                </button>
                <button className="btn btn-danger px-lg-2 py-0">
                  <span className="button-section-text">Delete</span>
                </button>
              </td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>12/07/2023</td>
              <td>003</td>
              <td>Seema</td>
              <td>draft</td>
              <td className="button-section-td">
                <button className="btn btn-primary px-lg-2 py-0"><span className="button-section-text">Edit</span></button>
                <button className="btn btn-success px-lg-2 py-0 mx-2">
                  <span className="button-section-text">
                    Print
                  </span>
                </button>
                <button className="btn btn-danger px-lg-2 py-0">
                  <span className="button-section-text">Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChittiListing;
