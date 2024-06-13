import { NavLink } from 'react-router-dom';

const MasterListing = () => {
  const masterlist: any = [
    'Client Group',
    'Client Name',
    'Category',
    'Sub Category',
    'Huid product',
    'Supplier Group',
    'Supplier',
    'Project Sub Category Mapping',
  ];

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {masterlist?.length > 0 &&
          masterlist !== null &&
          masterlist.map((data: any, index: any) => {
            const processedStr = data.replace(/\s+/g, '').toLowerCase();
            const linkTo: any = `/master/${processedStr}`;
            const isActive: any = window?.location?.pathname === linkTo;
            return (
              <div
                className={`mx-lg-2 mx-1 my-1 master-heading p-1 ${isActive ? 'activePage border-0' : ''
                  }`}
                key={index}
              >
                <NavLink
                  to={`/master/${processedStr}`}
                  className={`text-decoration-none navlink-class ${isActive ? 'text-white ' : ''
                    }`}
                >
                  <div className="rounded-4">
                    <div className="d-flex justify-content-center align-items-center master-listing-card-body">
                      <div className="card-title me-1 m-0">{data}</div>
                      <i className="fa-solid fa-arrow-turn-down d-flex align-items-center master-head-icon"></i>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MasterListing;
