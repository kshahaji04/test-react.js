import { NavLink } from 'react-router-dom';

import { useState } from 'react';
import LoadMoreTableDataInMaster from './MasterListing/LoadMoreTableDataInMaster';
import DeleteAlertModal from '../Modal/DeleteAlertModal';
import MasterUpdateModal from '../Modal/MasterUpdateModal';
import Loader from '../Loader';

const MasterTableListing = ({
    filteredList,
    tableViewData,
    handleTableViewRows,
    heading,
    dropdownData
}: any) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
    const [tableData, setTableData] = useState<any>({});

    const handleDeleteBtn = () => {
        // Handle delete logic here
    };

    const handleDltRecord = (name: any) => {
        setIsModalOpen(true);
    };

    const handleUpdateRecord: any = (data: any) => {
        setIsUpdateModalOpen(true)
        setTableData(data)
    }


    // Determine if the filteredList contains objects or strings
    const isObjectList = filteredList && filteredList.length > 0 && typeof filteredList[0] === 'object';
    const columnKeys = heading
        ? [heading]
        : isObjectList
            ? Object.keys(filteredList[0])
            : [];

    return (
        <>
            {filteredList?.length > 0 ? (
                <div className="container border mt-2">
                    <table className="table table-striped mt-2">
                        <thead>
                            <tr className="text-start table-heading table-heading-row mx-0">
                                <th scope="col" className="text-center">Sr No.</th>
                                {columnKeys.map((key: any, index: any) => (
                                    <th key={index} scope="col">
                                        {key.charAt(0).toUpperCase() + key.slice(1)?.split("_")?.join(" ")}
                                    </th>
                                ))}
                                <th scope="col" className="text-center "></th>
                                <th scope="col" className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredList?.length > 0 &&
                                filteredList !== null &&
                                filteredList
                                    .slice(0, tableViewData)
                                    .map((data: any, index: any) => (
                                        <tr className="text-start table-body-row mx-0" key={index}>
                                            <td className="text-center p-1">{index + 1}</td>
                                            {isObjectList ? (
                                                columnKeys.map((key, idx) => (
                                                    <td key={idx} className="p-1 ps-2">
                                                        <NavLink to={`${data[key]}`} className="text-decoration-none text-dark">
                                                            {data[key]}
                                                        </NavLink>
                                                    </td>
                                                ))
                                            ) : (
                                                <td className="p-1 w-75">
                                                    <NavLink to={`${data}`} className="text-decoration-none text-dark">
                                                        {data}
                                                    </NavLink>
                                                </td>
                                            )}
                                            <td className="text-center p-0">
                                                <button type="button" className="btn btn-link button-section-text p-0 m-0 text-dark" onClick={() => handleUpdateRecord(data)}>Update</button>
                                            </td>
                                            <td className="text-center p-0">
                                                <button type="button" className="btn btn-link button-section-text p-0 m-0 text-dark" onClick={() => handleDltRecord(data)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Loader />
            )}

            {filteredList?.length > 19 && filteredList !== null && (
                <LoadMoreTableDataInMaster handleTableViewRows={handleTableViewRows} />
            )}
            {isModalOpen && (
                <DeleteAlertModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    handleDeleteBtn={handleDeleteBtn}
                />
            )}
            {isUpdateModalOpen && (
                <MasterUpdateModal
                    isModalOpen={isUpdateModalOpen}
                    setIsModalOpen={setIsUpdateModalOpen}
                    handleDeleteBtn={handleDeleteBtn}
                    data={tableData}
                    dropdownData={dropdownData}
                />
            )}
        </>
    );
};

export default MasterTableListing;
