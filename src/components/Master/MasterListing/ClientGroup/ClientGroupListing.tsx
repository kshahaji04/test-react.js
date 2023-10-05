import React from 'react';

const ClientGroupListing = ({ clientGroupList }: any) => {
  return (
    <div className="container">
      
      <div className="table-responsive-sm">
        <table className="table">
          {clientGroupList?.length > 0 &&
            ClientGroupListing !== null &&
            clientGroupList.map((group: any, key: any) => {
              return <li className="fs-6">{group}</li>;
            })}
        </table>
      </div>
    </div>
  );
};

export default ClientGroupListing;
