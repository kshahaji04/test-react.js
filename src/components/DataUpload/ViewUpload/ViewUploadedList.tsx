const ViewUploadedList = () => {
  return (
    // <div className="container mt-2 border rounded-3 py-1  mb-5">
    //   <div className="d-flex justify-content-between mb-2 table-heading-row">
    //     <caption>Uploaded List</caption>
    //     <p className="cursor-pointer my-auto btn-link" onClick={HandleAddRow}>
    //       Add Row
    //     </p>
    //   </div>
    //   <table className="table table-striped caption-top table-hover">
    //     <thead>
    //       <tr className="table-header-row">
    //         <th scope="col">No.</th>
    //         <th scope="col">TRANSFERID</th>
    //         <th scope="col">RFID</th>
    //         <th scope="col">SKUNUMBER</th>
    //         <th scope="col">PACKAGEID</th>
    //         <th scope="col">Photonumber</th>
    //         <th scope="col"></th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {tableData.map((row) => (
    //         <tr key={row.id}>
    //           <td>{row.id}</td>
    //           <td>
    //             <input
    //               type="text"
    //               className="form-control custom-input-field"
    //               aria-label="Sizing example input"
    //               aria-describedby="inputGroup-sizing-sm"
    //             />
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               className="form-control custom-input-field"
    //               aria-label="Sizing example input"
    //               aria-describedby="inputGroup-sizing-sm"
    //             />
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               className="form-control custom-input-field"
    //               aria-label="Sizing example input"
    //               aria-describedby="inputGroup-sizing-sm"
    //             />
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               className="form-control custom-input-field"
    //               aria-label="Sizing example input"
    //               aria-describedby="inputGroup-sizing-sm"
    //             />
    //           </td>
    //           <td>
    //             <input
    //               type="text"
    //               className="form-control custom-input-field"
    //               aria-label="Sizing example input"
    //               aria-describedby="inputGroup-sizing-sm"
    //             />
    //           </td>
    //           <td>
    //             <div
    //               className="d-flex align-items-center delete-link"
    //               onClick={() => HandleDeleteRow(row.id)}
    //             >
    //               <i className="fa-solid fa-xmark fs-4"></i>
    //             </div>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <div className="container">
      <table className="table table table-striped table-hover mt-1">
        <thead className="table-heading">
          <tr className="table-heading-row">
            <th className="sr-width" scope="col">
              No.
            </th>
            <th className="" scope="col">
              TRANSFERID
            </th>
            <th className="" scope="col">
              RFID
            </th>
            <th className="" scope="col">
              SKUNUMBER
            </th>
            <th className="" scope="col">
              PACKAGEID
            </th>
            <th className="" scope="col">
              Photonumber
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body-row-em">
            <td scope="row">1</td>
            <td>DTR-100040026 </td>
            <td>300163904</td>
            <td>TSKU-0300163904</td>
            <td>PI23-100009189</td>
            <td>SPS1539-06A</td>
          </tr>
          <tr className="table-body-row-em">
            <td scope="row">2</td>
            <td>DTR-100040026</td>
            <td>300163912</td>
            <td>TSKU-0300163912</td>
            <td>PI23-100009189</td>
            <td>SPS1706-18</td>
          </tr>
          <tr className="table-body-row-em">
            <td scope="row">3</td>
            <td>DTR-100040026</td>
            <td>300163920</td>
            <td>TSKU-0300163920</td>
            <td>PI23-100009189</td>
            <td>SPS1748-04</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewUploadedList;
