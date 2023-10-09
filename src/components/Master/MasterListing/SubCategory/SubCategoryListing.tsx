import React from 'react'
import { NavLink } from 'react-router-dom';

const SubCategoryListing = ({ subCategoryList }: any) => {
  return (
    <div className="container border mt-2">
    <table className="table table-striped mt-2">
      <thead>
        <tr className="text-start table-heading table-heading-row">
          <th scope="col">Subcategory Listing</th>
        </tr>
      </thead>
      <tbody>
        {subCategoryList?.length > 0 &&
          subCategoryList !== null &&
          subCategoryList.map((group: any, index: any) => (
            <tr className="text-start table-body-row" key={index}>
              <td className="p-1">
                <NavLink to={`${group}`} className="text-decoration-none text-dark">
                  {group}
                </NavLink>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default SubCategoryListing