const ShowTotalAmountOfReportData = ({ data, colSpan }: any) => {
  const calculateTotalAmount: any = () => {
    let totalGrossWeight: any = 0;
    let totalNetWeight = 0;
    let totalAmount = 0;

    data?.length > 0 &&
      data !== null &&
      data.forEach((item: any) => {
        if (item.total_gross_weight !== undefined) {
          totalGrossWeight += item.total_gross_weight;
        }

        if (item.total_net_weight !== undefined) {
          totalNetWeight += item.total_net_weight;
        }
        if (item.total_amount !== undefined) {
          totalAmount += item.total_amount;
        }
      });

    return (
      <>
        <td colSpan={colSpan} className="">
          Total
        </td>
        <td>{totalGrossWeight}</td>
        <td>{totalNetWeight}</td>
        <td>{totalAmount}</td>
      </>
    );
  };

  return (
    <>
      <tr className="report-total-row-at-bottom text-white">
        {calculateTotalAmount()}
      </tr>
    </>
  );
};

export default ShowTotalAmountOfReportData;
