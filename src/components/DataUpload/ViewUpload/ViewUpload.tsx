import { useState } from 'react';

const ViewUpload = () => {
  const [tableData, setTableData] = useState([{ id: 1, name: '' }]);

  const HandleAddRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      name: `Row ${tableData.length + 1}`,
    };
    setTableData([...tableData, newRow]);
  };

  const HandleDeleteRow: any = (id: any) => {
    if (tableData?.length > 1) {
      const updatedData = tableData.filter((row) => row.id !== id);
      setTableData(updatedData);
    }
  };
  return (
    <div className="container mt-2 border rounded-3 py-1  mb-5">
      <div className="d-flex justify-content-between mb-2 table-heading-row">
        <caption>Uploaded List</caption>
        <p className="cursor-pointer my-auto btn-link" onClick={HandleAddRow}>
          Add Row
        </p>
      </div>
      <table className="table table-striped caption-top table-hover">
        <thead>
          <tr className="table-header-row">
            <th scope="col">No.</th>
            <th scope="col">TRANSFERID</th>
            <th scope="col">RFID</th>
            <th scope="col">SKUNUMBER</th>
            <th scope="col">PACKAGEID</th>
            <th scope="col">Photonumber</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </td>
              <td>
                <div
                  className="d-flex align-items-center delete-link"
                  onClick={() => HandleDeleteRow(row.id)}
                >
                  <i className="fa-solid fa-xmark fs-4"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUpload;
