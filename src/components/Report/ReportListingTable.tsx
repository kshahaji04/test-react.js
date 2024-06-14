import { useState } from 'react';
import LoadMoreTableDataInMaster from '../Master/MasterListing/LoadMoreTableDataInMaster';
import Loader from '../General/Loader';

const ReportListingTable = ({ reportData }: any) => {

    const [tableViewData, setTableViewData] = useState<any>(20);

    const handleTableViewRows: any = (data: any) => {
        console.log("Dataaa", data)
        if (data !== 5) {
            setTableViewData(data);
        }
    };
    const headers =
        reportData.length > 0 && reportData[0] ? Object.keys(reportData[0]) : [];
    console.log("pagination", tableViewData)
    return (
        <div className="container">
            {
                reportData?.length > 0 ? (
                    <div className="row justify-content-center">
                        <div className={`col table-responsie m-auto table_container`}>
                            <table className="table table-hover table-striped cursor my-0">
                                <thead className="">
                                    <tr className="row row-cols-7 report-table-head-row  justify-content-center">
                                        <th scope="col" className="thead col-1">
                                            Sr. No.
                                        </th>
                                        {headers?.map((header: string, index: number) => (
                                            <th
                                                key={index}
                                                scope="col"
                                                className={`thead ${headers?.length <= 4 ? 'col-2' : 'col'}`}
                                            >
                                                {header?.charAt(0)?.toUpperCase() +
                                                    header?.slice(1)?.replace('_', ' ')}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {reportData
                                        .slice(0, -1) // Excludes the last row
                                        .slice(0, tableViewData) // Still consider tableViewData limit
                                        .map((data: any, index: any) => {
                                            const firstKey = Object.keys(data)[0];
                                            const isTotalRow = data[firstKey] === 'Total';
                                            return (
                                                <tr
                                                    key={index}
                                                    className={`row row-cols-7 justify-content-center text-center ${isTotalRow ? 'fw-bold bg-warning ' : ''
                                                        }`}
                                                >
                                                    <td scope="col" className="col-1 table_row py-1 py-auto">
                                                        {!isTotalRow && index + 1}
                                                    </td>
                                                    {headers.map((header: any, idx: any) => (
                                                        <td
                                                            key={idx}
                                                            scope="col"
                                                            className={`table_row py-1 py-auto ${headers?.length <= 4 ? 'col-2' : 'col'
                                                                }`}
                                                        >
                                                            {data[header]}
                                                        </td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                    {/* Render the last row separately */}
                                </tbody>
                            </table>
                            {reportData.length > 0 && (
                                <div className={`sticky-bottom `}>
                                    <table className={`table table-hover table-striped cursor`}>
                                        <tbody>
                                            <tr className="row row-cols-7 justify-content-center text-center fw-bold">

                                                {headers.map((header: any, idx: any) => (
                                                    <td
                                                        key={idx}
                                                        scope="col"
                                                        className={`table_row py-1 py-auto total_row_container   ${headers?.length <= 4 ? 'col-2' : 'col'}`}
                                                    >
                                                        {reportData[reportData.length - 1][header]}
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        <div className="row">
                            <div className={` px-0 mx-auto ${headers?.length <= 4 ? 'col-9' : 'col'
                                }`}>
                                {reportData?.length > 20 && reportData !== null && (
                                    <LoadMoreTableDataInMaster
                                        handleTableViewRows={handleTableViewRows}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loader />
                )
            }
        </div>
    )
}

export default ReportListingTable