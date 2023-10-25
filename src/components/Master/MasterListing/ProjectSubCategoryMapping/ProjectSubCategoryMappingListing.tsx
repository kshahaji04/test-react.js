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
    <div className="container border mt-2 mb-3 row">
      <div className="">
        <table className="table table-striped mt-2 table-hover">
          <thead>
            <tr className="text-start table-heading table-heading-row row">
              <div className="col-lg-3 col-3">
                <th scope="col-lg-6">name </th>
              </div>
              <div className="col-lg-3 col-3">
                <th scope="col-lg-6">Project </th>
              </div>
              <div className="col-lg-3 col-3">
                <th scope="col-lg-6"> Stone</th>
              </div>
              <div className="col-lg-3 col-3">
                <th scope="col-lg-6"> plain</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {ProjectSubCategoryMappingList?.length > 0 &&
              ProjectSubCategoryMappingList !== null &&
              ProjectSubCategoryMappingList.slice(0, tableViewData).map(
                (group: any, index: any) => (
                  <tr className="text-start table-body-row row" key={index}>
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
                    <td className="col-lg-3 col-3 p-1">
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

            {ProjectSubCategoryMappingList?.length > 10 &&
              ProjectSubCategoryMappingList !== null && (
                <LoadMoreTableDataInMaster
                  HandleTableViewRows={HandleTableViewRows}
                />
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectSubCategoryMappingListing;
