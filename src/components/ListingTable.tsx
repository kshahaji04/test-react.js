import React from 'react';
// import { TableListingData } from "../datasets/TableListingData";

const ListingTable = ({ tableListingData }: any) => {
    console.log("tableListingData", tableListingData)
    const column: any = Object.keys(tableListingData[0]);

    console.log("columndata", column)

    const TableHeading: any = () => {
        return (
            <>
                {column.map((heading: any, index: any) => {
                    return (
                        <>
                            <th className="" key={index} scope="col">
                                {heading}
                            </th>
                        </>
                    )
                })}
            </>
        )
    };

    const TableBodyData: any = () => {
        return (
            <>
                {
                    tableListingData?.length > 0 && tableListingData !== null ? (
                        <>
                            {
                                tableListingData.map((data: any) => {
                                    return (
                                        <tr className="table-body-row" key={data}>
                                            {
                                                column.map((v: any) => {
                                                    return <td className='border-0' key={v}>{data[v]}</td>
                                                })
                                            }

                                            <td className="button-section-td border-0">
                                                <button className="btn btn-primary px-lg-2 py-0"><span className="button-section-text">Edit</span></button>
                                                <button className="btn btn-success px-lg-2 py-0 mx-2">
                                                    <span className="button-section-text">
                                                        Print
                                                    </span>
                                                </button>
                                                <button className="btn btn-danger px-lg-2 py-0">
                                                    <span className="button-section-text">Delete</span>
                                                </button>
                                            </td>


                                        </tr>
                                    )
                                })
                            }

                        </>
                    ) : "no data"
                }
            </>
        )
    }

    return (
        <div className="container">
            <table className="table table table-striped table-hover listing-table border-0">
                <thead className="table-heading">
                    <tr className="table-heading-row">
                        {TableHeading()}
                        <th className="w-25" scope="col"></th>
                    </tr>
                </thead>
                <tbody >
                    {TableBodyData()}
                </tbody>
            </table>
        </div>
    )
}

export default ListingTable;
