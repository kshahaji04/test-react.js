import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from './LoadMoreTableDataInMaster';

const SingleItemListingInMaster = ({ listingData, heading }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <>
      {listingData?.length > 0 && (
        <div className="text-end text-gray">
          {listingData?.slice(0, tableViewData)?.length} of{' '}
          {listingData?.length < 10
            ? '0' + listingData?.length
            : listingData?.length}
        </div>
      )}
      <div className="container border mt-2">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row">
              <th scope="col ">{heading}</th>
            </tr>
          </thead>
          <tbody>
            {listingData?.length > 0 &&
              listingData !== null &&
              listingData
                .slice(0, tableViewData)
                .map((group: any, index: any) => {
                  return (
                    <tr className="text-start table-body-row" key={index}>
                      <td className="p-1">
                        <NavLink
                          to={group}
                          className="text-decoration-none text-dark"
                        >
                          {group}
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}

            {listingData?.length > 20 && listingData !== null && (
              <LoadMoreTableDataInMaster
                HandleTableViewRows={HandleTableViewRows}
              />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingleItemListingInMaster;
