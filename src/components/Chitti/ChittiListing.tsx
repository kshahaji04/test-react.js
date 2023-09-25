import React from 'react';

const ChittiListing = () => {
  return (
    <>
    <div className="container">
      <table className="table table table-striped table-hover mt-5">
        <thead className='table-heading'>
          <tr>
            <th className='sr-width' scope="col" >Sr No.</th>
            <th  className='w-25' scope="col">Date</th>
            <th className='w-25'  scope="col">Chitti No</th>
            <th className='w-25'  scope="col">Customer</th>
            <th className='w-25'  scope="col" ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>20/09/2023</td>
            <td>CGTY67-65</td>
            <td>Jhon</td>
            <td className='w-50'>
             <button className='btn btn-primary m-1'>Edit</button>
             <button className='btn btn-success m-1'>Print</button>
             <button className='btn btn-danger m-1'>Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>04/06/2023</td>
            <td>CGTY67-67</td>
            <td>Reena</td>
            <td className='w-50'>
            <button className='btn btn-primary m-1'>Edit</button>
             <button className='btn btn-success m-1'>Print</button>
             <button className='btn btn-danger m-1'>Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>12/07/2023</td>
            <td>CGTY67-69</td>
            <td>Seema</td>
            <td className='w-50'> 
            <button className='btn btn-primary m-1'>Edit</button>
             <button className='btn btn-success m-1'>Print</button>
             <button className='btn btn-danger m-1'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ChittiListing;
