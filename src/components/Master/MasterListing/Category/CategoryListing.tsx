import React from 'react'

const CategoryListing = ({ CategoryList }: any) => {
  return (
    <div className="container border mt-2">
      <div className="table-responsive-sm">
        <table className="table">
          <ul className='list-group list-group-flush'>

            {CategoryList?.length > 0 &&
              CategoryList !== null &&
              CategoryList.map((group: any, index: any) => {
                return <li className="list-group-item  master-ul-li" key={index}>{group}</li>;
              })}
          </ul>
        </table>
      </div>
    </div>
  )
}

export default CategoryListing