import React from 'react';
import UseEmeraldDetailHook from '../../../hooks/dataUpload/emerald-detail-hook';

const EmeraldDetailPage = () => {
  const { emeraldDetail } = UseEmeraldDetailHook();
  console.log('emeraldDetail', emeraldDetail);
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped">
          {emeraldDetail?.emerald_table?.length > 0 &&
          emeraldDetail?.emerald_table !== null ? (
            <>
              {emeraldDetail?.emerald_table.map((values: any, index: any) => {
                return (
                  <>
                    <thead>
                      <tr>
                        {/* <th scope="col">{Object.keys(values)}</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </>
          ) : (
            ''
          )}
        </table>
      </div>
    </div>
  );
};

export default EmeraldDetailPage;
