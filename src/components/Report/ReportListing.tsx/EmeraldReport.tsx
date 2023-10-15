import React from 'react';
import UseEmeraldReportHook from '../../../hooks/report/emerald-report-hook';

const EmeraldReport = () => {
  const { emeraldReportData } = UseEmeraldReportHook();
  console.log('emeraldReportData in tsx', emeraldReportData);
  return (
    <div className="container">
      <div className='mb-1'>
        <h4>Emerald Report</h4>
      </div>
      <div className="table-responsive ">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-uppercase">
              <th scope="col">Supplier</th>
              <th scope="col">Transferid</th>
              <th scope="col">Rfid</th>
              <th scope="col">Skunumber</th>
              <th scope="col">packageid</th>
              <th scope="col">photonumber</th>
              <th scope="col">inventsizeid</th>
              <th scope="col">purity</th>
              <th scope="col">grosswt</th>
              <th scope="col">stonewt</th>
              <th scope="col">netwt</th>
              <th scope="col">studbomqty</th>
              <th scope="col">studbomamount</th>
              <th scope="col">nongoldwt</th>
              <th scope="col">tnogoldrate</th>
              <th scope="col">nmpcost</th>
              <th scope="col">product</th>
              <th scope="col">project</th>
              <th scope="col">sub category</th>
              <th scope="col">mc</th>
              <th scope="col">makingunit</th>
              <th scope="col">ej huid</th>
              <th scope="col">textbox2</th>
            </tr>
          </thead>
          <tbody>
            {emeraldReportData?.length > 0 && emeraldReportData !== null ? (
              <>
                {emeraldReportData.map((data: any, index: any) => {
                  return (
                    <tr className="report-table-row" key={index}>
                      <td>{data.supplier}</td>
                      <td>{data.transferid}</td>
                      <td>{data.rfid}</td>
                      <td>{data.skunumber}</td>
                      <td>{data.packageid}</td>
                      <td>{data.photonumber}</td>
                      <td>{data.inventsizeid}</td>
                      <td>{data.purity}</td>
                      <td>{data['SUM(grosswt)']}</td>
                      <td>{data['SUM(stonewt)']}</td>
                      <td>{data['SUM(netwt)']}</td>
                      <td>{data.studbomqty}</td>
                      <td>{data.studbomamount}</td>
                      <td>{data['SUM(nongoldwt)']}</td>
                      <td>{data.tnogoldrate}</td>
                      <td>{data.nmpcost}</td>
                      <td>{data.product}</td>
                      <td>{data.project}</td>
                      <td>{data.sub_category}</td>
                      <td>{data.mc}</td>
                      <td>{data.makingunit}</td>
                      <td>{data.ej_huid}</td>
                      <td>{data.textbox2}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              ''
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmeraldReport;
