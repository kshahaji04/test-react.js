import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const ProjectSubCategoryMappingListing = ({
  ProjectSubCategoryMappingList,
}: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <>
      {ProjectSubCategoryMappingList?.length > 0 && (
        <div className="text-end pe-3 text-gray">
          {ProjectSubCategoryMappingList?.slice(0, tableViewData)?.length} of{' '}
          {ProjectSubCategoryMappingList?.length < 10
            ? '0' + ProjectSubCategoryMappingList?.length
            : ProjectSubCategoryMappingList?.length}
        </div>
      )}
      <div className="container border mt-2 mb-3 ">

        <table className="table table-striped mt-2 table-hover">
          <thead>
            <tr className="text-start table-heading table-heading-row row">
              <div className="col-lg-1 col-1 d-flex justify-content-center">
                <th >Sr No. </th>
              </div>
              <div className="col-lg-3 col-3">
                <th >Name </th>
              </div>
              <div className="col-lg-3 col-3">
                <th >Project </th>
              </div>
              <div className="col-lg-3 col-3">
                <th> Stone</th>
              </div>
              <div className="col-lg-2 col-2">
                <th> Plain</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {ProjectSubCategoryMappingList?.length > 0 &&
              ProjectSubCategoryMappingList !== null &&
              ProjectSubCategoryMappingList.slice(0, tableViewData).map(
                (group: any, index: any) => (
                  <tr className="text-start table-body-row row" key={index}>
                    <td className='col-1 p-1 text-center'>
                      {index + 1}
                    </td>
                    <td className="col-lg-3 col-3 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.name}
                      </NavLink>
                    </td>
                    <td className="col-lg-3 col-3 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.project}
                      </NavLink>
                    </td>
                    <td className="col-lg-3 col-3 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.stone}
                      </NavLink>
                    </td>
                    <td className="col-lg-2 col-2 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.plain}
                      </NavLink>
                    </td>
                  </tr>
                )
              )}

          </tbody>
        </table>
      </div>
      {ProjectSubCategoryMappingList?.length > 19 &&
        ProjectSubCategoryMappingList !== null && (
          <LoadMoreTableDataInMaster
            HandleTableViewRows={HandleTableViewRows}
          />
        )}
    </>
  );
};

export default ProjectSubCategoryMappingListing;
