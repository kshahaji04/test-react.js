const ViewUploadedList = ({ emeraldTableData }: any) => {
  console.log("emeraldTableData", emeraldTableData)
  return (

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
          {emeraldTableData?.length > 0 && emeraldTableData !== null && (
            emeraldTableData.map((data: any, index: any) => {
              return (
                <tr className="table-body-row-em">
                  <td scope="row">{index}</td>
                  <td>{data.PACKAGEID} </td>
                  <td>{data.Photonumber}</td>
                  <td>{data.EFIF}</td>
                  <td>{data.SKUNUMBER}</td>
                  <td>{data.TRANSFERID}</td>

                </tr>
              )
            })
          )}


        </tbody>
      </table>
    </div>
  );
};

export default ViewUploadedList;
