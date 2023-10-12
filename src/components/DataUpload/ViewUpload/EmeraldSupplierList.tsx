import { NavLink } from 'react-router-dom';

const EmeraldSupplierList = ({ supplierList, emeraldSupplierData }: any) => {
  console.log('emeraldTableData', supplierList);
  console.log('emeraldSupplierData', emeraldSupplierData);
  return (
    <div className="container border mt-2">
      <table className="table table-striped emerald-supplier-table mt-2">
        <thead className="p-1">
          <th className="emerald-supplier-table-heading">Id</th>
          <th className="emerald-supplier-table-heading">Supplier</th>
          <th className="emerald-supplier-table-heading">Date</th>
          <th className="emerald-supplier-table-heading">Total No of Rows</th>
          <th className="emerald-supplier-table-heading">Total of Grosswt</th>
          <th className="emerald-supplier-table-heading">Total of Netwt</th>
        </thead>
      </table>
      <table className="table table-striped emerald-supplier-table mt-2">
        <thead></thead>
        <tbody>
          {emeraldSupplierData?.length > 0 &&
            emeraldSupplierData !== null &&
            emeraldSupplierData.map((value: any, index: any) => (
              <NavLink
                to={`${value.supplier}`}
                className="text-decoration-none text-dark"
              >
                <tr
                  className="text-start table-body-row border-secondary d-flex justify-content-around p-1 "
                  key={index}
                >
                  <td className="">1</td>
                  <td className="">{value.supplier}</td>
                  <td className="">{value.date}</td>
                  <td className="">{value.total_no_of_rows}</td>
                  <td className="">{value.total_of_grosswt}</td>
                  <td className="">{value.total_of_netwt}</td>
                </tr>
              </NavLink>
            ))}
        </tbody>
      </table>
    </div>
  );

  // <div className="container">
  //   <table className="table table table-striped table-hover mt-1">
  //     <thead className="table-heading">
  //       <tr className="table-heading-row">
  //         <th className="sr-width" scope="col">
  //           No.
  //         </th>
  //         <th className="" scope="col">
  //           TRANSFERID
  //         </th>
  //         <th className="" scope="col">
  //           RFID
  //         </th>
  //         <th className="" scope="col">
  //           SKUNUMBER
  //         </th>
  //         <th className="" scope="col">
  //           PACKAGEID
  //         </th>
  //         <th className="" scope="col">
  //           Photonumber
  //         </th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {emeraldTableData?.length > 0 && emeraldTableData !== null && (
  //         emeraldTableData.map((data: any, index: any) => {
  //           return (
  //             <tr className="table-body-row-em">
  //               <td scope="row">{index}</td>
  //               <td>{data.PACKAGEID} </td>
  //               <td>{data.Photonumber}</td>
  //               <td>{data.EFIF}</td>
  //               <td>{data.SKUNUMBER}</td>
  //               <td>{data.TRANSFERID}</td>

  //             </tr>
  //           )
  //         })
  //       )}

  //     </tbody>
  //   </table>
  // </div>
};

export default EmeraldSupplierList;
