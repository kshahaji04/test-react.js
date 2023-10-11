import React from 'react';
import { NavLink } from 'react-router-dom';

const SubCategoryListing = ({ subCategoryList, CategoryList }: any) => {
  return (
    <div className="container border mt-2 row">
      <div className="col-lg-6">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row">
              <th scope="col">Subcategory </th>
            </tr>
          </thead>
          <tbody>
            {subCategoryList?.length > 0 &&
              subCategoryList !== null &&
              subCategoryList.map((group: any, index: any) => (
                <tr className="text-start table-body-row" key={index}>
                  <td className="p-1">
                    <NavLink
                      to={`${group}`}
                      className="text-decoration-none text-dark"
                    >
                      {group}
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-6">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row">
              <th scope="col">Category </th>
            </tr>
          </thead>
          <tbody>
            {CategoryList?.length > 0 &&
              CategoryList !== null &&
              CategoryList.map((group: any, index: any) => (
                <tr className="text-start table-body-row" key={index}>
                  <td className="p-1">
                    <NavLink
                      to={`${group}`}
                      className="text-decoration-none text-dark"
                    >
                      {group}
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubCategoryListing;
