import React from 'react'

const ClientNameListing = ({ clientNameList }: any) => {
  return (
    <div className="container border mt-2">
      <div className="table-responsive-sm">
        <table className="table">
          <ul className='list-group list-group-flush'>

            {clientNameList?.length > 0 &&
              clientNameList !== null &&
              clientNameList.map((group: any, index: any) => {
                return <li className="list-group-item  master-ul-li" key={index}>{group}</li>;
              })}
          </ul>
        </table>
      </div>
    </div>
  )
}

export default ClientNameListing