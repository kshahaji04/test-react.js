import { useRef, useEffect, useState } from 'react';
import useEmeraldReportHook from '../../../hooks/report/emerald-report-hook';
import useSubCategoryHook from '../../../hooks/Master/sub-category-hook';
import FilterReportListing from './FilterReportListing';
import useDataUploadHook from '../../../hooks/dataUpload/data-upload-hook';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';

import { getEmeraldReportData } from '../../../store/slices/report/get-emerald-report-slice';

const EmeraldReport = () => {
  const dispatch = useDispatch();
  const { emeraldReportData } = useEmeraldReportHook();
  const { subCategoryList }: any = useSubCategoryHook();
  const { updatedSupplierList }: any = useDataUploadHook();

  const accessToken: any = useSelector(get_access_token);

  const [searchInputValues, setSearchInputValues] = useState({
    project: '',
  });

  const showSubCategoryInFilter = useRef(true);
  const showSupplierInFilter = useRef(true);
  const showProjectFieldInFilter = useRef(true);

  const [searchSupplier, setSearchSupplier] = useState<any>('');
  const [searchSubCategory, setSearchSubCategory] = useState<any>('');

  const handleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    const handleFilterList: any = () => {
      const reqParams: any = {
        token: accessToken?.token,
        supplier: searchSupplier,
        project: searchInputValues?.project,
        sub_category: searchSubCategory,
      };
      if (
        updatedSupplierList?.length > 0 &&
        updatedSupplierList !== null &&
        updatedSupplierList.find((data: any) => data === searchSupplier)
      ) {
        dispatch(getEmeraldReportData(reqParams));
      }

      if ((reqParams?.from_date || reqParams?.to_date)?.length > 0) {
        dispatch(getEmeraldReportData(reqParams));
      }

      if (
        subCategoryList?.length > 0 &&
        subCategoryList !== null &&
        subCategoryList.find((data: any) => data === searchSubCategory)
      ) {
        dispatch(getEmeraldReportData(reqParams));
      }

      if (Object.keys(reqParams.project)?.length > 0) {
        dispatch(getEmeraldReportData(reqParams));
      }

      const checkNoFilterApply = () => {
        if (
          !reqParams.supplier &&
          !reqParams.project &&
          !reqParams.sub_category
        ) {
          return true;
        }
        return false;
      };
      if (checkNoFilterApply()) {
        dispatch(getEmeraldReportData(reqParams));
      }
    };

    handleFilterList();
  }, [searchInputValues, searchSupplier, searchSubCategory]);

  return (
    <div className="container mb-5 ">
      <div className="d-flex justify-content-between my-1">
        <h5>Emerald Report</h5>
        {/* <button
          type="button"
          className="btn btn-primary btn-sm py-0 download-report-btn"
          onClick={handleDownloadReport}
        >
          <span className="fs-6">Download Report</span>
        </button> */}
      </div>

      <FilterReportListing
        searchSubCategory={searchSubCategory}
        setSearchSubCategory={setSearchSubCategory}
        handleSearchInput={handleSearchInput}
        showSubCategoryInFilter={showSubCategoryInFilter}
        subCategoryList={subCategoryList}
        showSupplierInFilter={showSupplierInFilter}
        showProjectFieldInFilter={showProjectFieldInFilter}
        searchSupplier={searchSupplier}
        setSearchSupplier={setSearchSupplier}
        supplierList={updatedSupplierList}
        // handleFilterList={handleFilterList}
      />

      <div className="table-responsive report-table-container ">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row sticky-top">
            <tr className="report-table-head-tr text-uppercase ">
              <th scope="col">No</th>
              <th scope="col">Supplier</th>
              <th scope="col">Transferid</th>
              <th scope="col">Rfid</th>
              <th scope="col">Skunumber</th>
              <th scope="col">packageid</th>
              <th scope="col">photonumber</th>
              <th scope="col">inventsizeid</th>
              <th scope="col">purity</th>
              <th scope="col">grosswt</th>
              <th scope="col">stonewt</th>
              <th scope="col">netwt</th>
              <th scope="col">studbomqty</th>
              <th scope="col">studbomamount</th>
              <th scope="col">nongoldwt</th>
              <th scope="col">tnogoldrate</th>
              <th scope="col">nmpcost</th>
              <th scope="col">product</th>
              <th scope="col">project</th>
              <th scope="col">sub category</th>
              <th scope="col">mc</th>
              <th scope="col">makingunit</th>
              <th scope="col">ej huid</th>
              <th scope="col">textbox2</th>
            </tr>
          </thead>
          <tbody>
            {emeraldReportData?.length > 0 && emeraldReportData !== null ? (
              <>
                {emeraldReportData.map((data: any, index: any) => {
                  return (
                    <tr className="report-table-row" key={index}>
                      <td>{index + 1}</td>
                      <td>{data.supplier}</td>
                      <td>{data.transferid}</td>
                      <td>{data.rfid}</td>
                      <td>{data.skunumber}</td>
                      <td>{data.packageid}</td>
                      <td>{data.photonumber}</td>
                      <td>{data.inventsizeid}</td>
                      <td>{data.purity}</td>
                      <td>{data['SUM(grosswt)']}</td>
                      <td>{data['SUM(stonewt)']}</td>
                      <td>{data['SUM(netwt)']}</td>
                      <td>{data.studbomqty}</td>
                      <td>{data.studbomamount}</td>
                      <td>{data['SUM(nongoldwt)']}</td>
                      <td>{data.tnogoldrate}</td>
                      <td>{data.nmpcost}</td>
                      <td>{data.product}</td>
                      <td>{data.project}</td>
                      <td>{data.sub_category}</td>
                      <td>{data.mc}</td>
                      <td>{data.makingunit}</td>
                      <td>{data.ej_huid}</td>
                      <td>{data.textbox2}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              ''
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmeraldReport;
