import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const ProjectSubCategoryMappingListing = ({
  ProjectSubCategoryMappingList,
  HandleTableViewRows,
  tableViewData,
}: any) => {

  return (
    <>
      <div className="container border mt-2 ">
        <table className="table table-striped mt-2 table-hover">
          <thead>
            <tr className="text-start table-heading table-heading-row row mx-0">
              <th scope='col' className='col-lg-1 col-2 d-flex justify-content-center'>Sr No.</th>
              <th scope='col' className='col-lg-3 col-2'> Name </th>
              <th scope='col' className='col-lg-3 col-2'>Project</th>
              <th scope='col' className='col-lg-3 col-3'>Stone</th>
              <th scope='col' className='col-lg-2 col-3'>Plain</th>
            </tr>
          </thead>
          <tbody>
            {ProjectSubCategoryMappingList?.length > 0 &&
              ProjectSubCategoryMappingList !== null &&
              ProjectSubCategoryMappingList.slice(0, tableViewData).map(
                (group: any, index: any) => (
                  <tr className="text-start table-body-row row mx-0" key={index}>
                    <td className='col-lg-1 col-2 p-1 text-center'>
                      {index + 1}
                    </td>
                    <td className="col-lg-3 col-2 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.name}
                      </NavLink>
                    </td>
                    <td className="col-lg-3 col-2 p-1">
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
                    <td className="col-lg-2 col-3 p-1">
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
