import React from 'react';

const ChittiListing = () => {
  return (
    <>
      <div className="container">
        <table className="table table table-striped table-hover mt-1">
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
                Customer
              </th>
              <th className="w-25" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>20/09/2023</td>
              <td>001</td>
              <td>Jhon</td>
              <td className="">
                <button className="btn btn-primary px-lg-2 py-0">Edit</button>
                <button className="btn btn-success px-lg-2 py-0 mx-2">
                  Print
                </button>
                <button className="btn btn-danger px-lg-2 py-0">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>04/06/2023</td>
              <td>002</td>
              <td>Reena</td>
              <td className="">
                <button className="btn btn-primary px-lg-2 py-0">Edit</button>
                <button className="btn btn-success px-lg-2 py-0 mx-2">
                  Print
                </button>
                <button className="btn btn-danger px-2 py-0">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>12/07/2023</td>
              <td>003</td>
              <td>Seema</td>
              <td className="">
                <button className="btn btn-primary px-lg-2 py-0">Edit</button>
                <button className="btn btn-success px-lg-2 py-0 mx-2">
                  Print
                </button>
                <button className="btn btn-danger px-lg-2 py-0">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChittiListing;
