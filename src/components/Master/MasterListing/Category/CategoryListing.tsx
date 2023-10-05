import React from 'react'

const CategoryListing = ({CategoryList}:any) => {
  return (
    <div className="container">
      
      <div className="table-responsive-sm">
        <table className="table">
          {CategoryList?.length > 0 &&
            CategoryList !== null &&
            CategoryList.map((group: any, key: any) => {
              return <li className="fs-6">{group}</li>;
            })}
        </table>
      </div>
    </div>
  )
}

export default CategoryListing