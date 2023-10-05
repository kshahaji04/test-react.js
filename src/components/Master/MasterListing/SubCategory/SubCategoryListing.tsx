import React from 'react'

const SubCategoryListing = ({subCategoryList}:any) => {
  return (
    <div className="container">
      
      <div className="table-responsive-sm">
        <table className="table">
          {subCategoryList?.length > 0 &&
            subCategoryList !== null &&
            subCategoryList.map((group: any, index: any) => {
              return <li className="fs-6" key={index}>{group}</li>;
            })}
        </table>
      </div>
    </div>
  )
}

export default SubCategoryListing