import { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useMasterUpdateHook from '../../hooks/Master/master-update-hook';
import DeleteAlertModal from '../Modal/DeleteAlertModal';
import MasterUpdateModal from '../Modal/MasterUpdateModal';
import LoadMoreTableDataInMaster from './MasterListing/LoadMoreTableDataInMaster';
import Loader from '../General/Loader';
import NoRecord from '../NoRecord';

const MasterTableListing = ({
  filteredList,
  tableViewData,
  handleTableViewRows,
  heading,
  dropdownData,
  isLoading
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [tableData, setTableData] = useState<any>({});

  const { handleDeleteBtn }: any = useMasterUpdateHook({
    data: tableData,
    setIsModalOpen,
  });

  const handleDltRecord = (data: any) => {
    setTableData(data?.name);
    setIsModalOpen(true);
  };

  const handleUpdateRecord: any = (data: any) => {
    setIsUpdateModalOpen(true);
    setTableData(data);
  };

  // Determine if the filteredList contains objects or strings
  const isObjectList =
    filteredList &&
    filteredList.length > 0 &&
    typeof filteredList[0] === 'object';
  const columnKeys: any = heading
    ? [heading]
    : isObjectList
      ? Object.keys(filteredList[0])?.length > 0 &&
      Object.keys(filteredList[0]).filter((key) => key !== 'delete')
      : [];

  const tooltip = (
    <Tooltip id="tooltip">
      <span className="del-tooltip-content">
        Unable to delete. Transactions exist for this entry.
      </span>
    </Tooltip>
  );

  console.log('filter list', filteredList, isLoading);

  const showTableSection: any = () => {
    if (isLoading) {
      return <Loader />
    }
    if (filteredList?.length > 0) {
      return (
        <>
          <div className="container border mt-2">
            <table className="table table-striped mt-2">
              <thead>
                <tr className="text-start table-heading table-heading-row mx-0">
                  <th scope="col" className="text-center">
                    Sr No.
                  </th>
                  {columnKeys?.length > 0 &&
                    columnKeys.map((key: any, index: any) => (
                      <th key={index} scope="col">
                        {key.charAt(0).toUpperCase() +
                          key.slice(1)?.split('_')?.join(' ')}
                      </th>
                    ))}
                  <th scope="col" className="text-center"></th>
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
                          columnKeys.map((key: any, idx: any) => (
                            <td
                              key={idx}
                              className={`p-1 ps-2 ${Object.keys(data)?.length === 2 ? 'w-50' : ''
                                }`}
                            >
                              <NavLink
                                to={`${data[key]}`}
                                className="text-decoration-none text-dark"
                              >
                                {typeof data[key] === 'string' ? data[key]?.toUpperCase() : data[key]}
                              </NavLink>
                            </td>
                          ))
                        ) : (
                          <td className="p-1 w-75">
                            <NavLink
                              to={`${data}`}
                              className="text-decoration-none text-dark"
                            >
                              {data}
                            </NavLink>
                          </td>
                        )}
                        <td className="text-center p-0">
                          <button
                            type="button"
                            className="btn btn-link button-section-text p-0 m-0 text-primary"
                            onClick={() => handleUpdateRecord(data)}
                          >
                            Update
                          </button>
                        </td>
                        <td className="text-center p-0">
                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              className="btn btn-link button-section-text p-0 m-0 text-danger"
                              onClick={() => handleDltRecord(data)}
                              disabled={data.delete === 0}
                            >
                              Delete
                            </button>
                            {data.delete === 0 ? (
                              <OverlayTrigger
                                placement="left"
                                trigger={['hover', 'click']}
                                overlay={tooltip}
                              >
                                <span className="ps-2 d-flex align-items-center">
                                  <i className="fa-solid fa-circle-exclamation cursor-pointer"></i>
                                </span>
                              </OverlayTrigger>
                            ) : (
                              <span className="px-2 pe-3"></span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </>
      )
    }
    if (!isLoading && !filteredList) {
      return <NoRecord />
    }
  }
  return (
    <>
      {showTableSection()}
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
          data={tableData}
          dropdownData={dropdownData}
        />
      )}
    </>
  );
};

export default MasterTableListing;
