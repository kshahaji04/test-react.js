import React from 'react'

const ClientNameListing = ({clientNameList}:any) => {
  return (
    <div className="container">
      
      <div className="table-responsive-sm">
        <table className="table">
          {clientNameList?.length > 0 &&
            clientNameList !== null &&
            clientNameList.map((group: any, index: any) => {
              return <li className="fs-6" key={index}>{group}</li>;
            })}
        </table>
      </div>
    </div>
  )
}

export default ClientNameListing