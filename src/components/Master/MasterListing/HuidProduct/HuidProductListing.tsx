import { NavLink } from 'react-router-dom';

const HuidProductListing = ({ huidProductData }: any) => {
  return (
    <div className="container border mt-2">
      <table className="table table-striped mt-2">
        <thead>
          <tr className="text-start table-heading table-heading-row">
            <th scope="col ">Huid Product</th>
          </tr>
        </thead>
        <tbody>
          {huidProductData?.length > 0 &&
            huidProductData !== null &&
            huidProductData.map((group: any, index: any) => {
              return (
                <tr className="text-start table-body-row" key={index}>
                  <td className="p-1">
                    <NavLink
                      to={group}
                      className="text-decoration-none text-dark"
                    >
                      {group}
                    </NavLink>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default HuidProductListing;
