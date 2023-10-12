import React from 'react';

const ReportTableListing = ({ reportTableData }: any) => {
  const data = {
    headings: ['heading1', 'heading2', 'heading3', 'heading4'],
    values: [
      {
        category: 'dummy',
        gross_weight: '121',
        amount: '2121',
        total: '21s21',
      },
      {
        category: 'dummy',
        gross_weight: '121',
        amount: '2121',
        total: '21s21',
      },
      {
        category: 'dummy',
        gross_weight: '121',
        amount: '2121',
        total: '21s21',
      },
    ],
  };

  return (
    <table className="table table-bordered">
      <thead>
        {data.headings.map((head: any) => {
          return <th scope="col">{head}</th>;
        })}
        <tr></tr>
      </thead>
      <tbody>
        {data.values.map((dataa: any) => {
          return (
            <tr>
              <td>{dataa.category}</td>
              <td>{dataa.gross_weight}</td>
              <td>{dataa.amount}</td>
              <td>{dataa.total}</td>
              {/* <td>@mdo</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReportTableListing;
