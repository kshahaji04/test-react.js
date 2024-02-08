import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const HuidProductListing = ({ listingData }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <>
      {listingData?.length > 0 && (
        <div className="text-end pe-3 text-gray">
          {listingData?.slice(0, tableViewData)?.length} of{' '}
          {listingData?.length < 10
            ? '0' + listingData?.length
            : listingData?.length}
        </div>
      )}
      <div className="container border mt-2">
        <div className="">
          <table className="table table-striped mt-2">
            <thead>
              <tr className="text-start table-heading table-heading-row row">
                <div className="col-1 d-flex justify-content-center">
                  <th >Sr No.</th>
                </div>
                <div className="col-lg-6 col-6 px-0">
                  <th >Huid Name</th>
                </div>
                <div className="col-lg-5 col-5 px-0">
                  <th >Hm pcs</th>
                </div>
              </tr>
            </thead>
            <tbody>
              {listingData?.length > 0 &&
                listingData !== null &&
                listingData
                  .slice(0, tableViewData)
                  .map((group: any, index: any) => (
                    <tr className="text-start table-body-row row" key={index}>
                      <td className='col-1 text-center p-1'>
                        {index + 1}
                      </td>
                      <td className="col-lg-6 col-6 p-1">
                        <NavLink
                          to={`${group.title}`}
                          className="text-decoration-none text-dark"
                        >
                          {group.title}
                        </NavLink>
                      </td>
                      <td className="col-lg-5 col-5 p-1">
                        <NavLink
                          to={`${group.title}`}
                          className="text-decoration-none text-dark"
                        >
                          {group.custom_hm_pcs}
                        </NavLink>
                      </td>
                    </tr>
                  ))}

            </tbody>
          </table>
        </div>
      </div>
      {listingData?.length > 19 && listingData !== null && (
        <LoadMoreTableDataInMaster
          HandleTableViewRows={HandleTableViewRows}
        />
      )}
    </>
  );
};

export default HuidProductListing;
