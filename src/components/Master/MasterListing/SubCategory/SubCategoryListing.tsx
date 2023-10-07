import React from 'react'
import { NavLink } from 'react-router-dom';

const SubCategoryListing = ({ subCategoryList }: any) => {
  return (
    <div className="container  mt-2">
      <div className="table-responsive-sm">
        <table className="table">
          <ul className='list-group list-group-flush'>

            {subCategoryList?.length > 0 &&
              subCategoryList !== null &&
              subCategoryList.map((group: any, index: any) => {
                return (
                  <NavLink to={group} className="text-decoration-none">
                    <li className="list-group-item master-ul-li" key={index}>{group}</li>
                  </NavLink>
                );
              })}
          </ul>
        </table>
      </div>
    </div>
  )
}

export default SubCategoryListing