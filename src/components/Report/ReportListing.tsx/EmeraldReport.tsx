import { useRef, useState } from 'react';
import UseEmeraldReportHook from '../../../hooks/report/emerald-report-hook';
import UseSubCategoryHook from '../../../hooks/Master/sub-category-hook';
import FilterReportListing from './FilterReportListing';
import UseDataUploadHook from '../../../hooks/dataUpload/data-upload-hook';

const EmeraldReport = () => {
  const { emeraldReportData } = UseEmeraldReportHook();
  const { subCategoryList }: any = UseSubCategoryHook();
  const { updatedSupplierList }: any = UseDataUploadHook();
  console.log('emeraldReportData in tsx', updatedSupplierList);

  const [searchInputValues, setSearchInputValues] = useState({
    supplier: '',
    project: '',
    fromDate: '',
    toDate: '',
  });

  const showSubCategoryInFilter = useRef(true);
  const showSupplierInFilter = useRef(true);
  const showProjectFieldInFilter = useRef(true);

  const [searchSubCategory, setSearchSubCategory] = useState<any>('');
  const [searchSupplier, setSearchSupplier] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  const filteredList =
    emeraldReportData?.length > 0 &&
    emeraldReportData !== null &&
    (searchSupplier || searchInputValues.project || searchSubCategory)
      ? emeraldReportData.filter((item: any) => {
          const supplierMatch = searchSupplier
            ? item?.supplier?.includes(searchSupplier)
            : true;
          const projectMatch = searchInputValues.project
            ? item?.category?.includes(searchInputValues.project)
            : true;
          const subCategoryMatch = searchSubCategory
            ? item?.sub_category?.includes(searchSubCategory)
            : true;

          return supplierMatch && subCategoryMatch && projectMatch;
        })
      : emeraldReportData;

  return (
    <div className="container mb-5">
      <div className="mb-1">
        <h5>Emerald Report</h5>
      </div>

      <FilterReportListing
        searchSubCategory={searchSubCategory}
        setSearchSubCategory={setSearchSubCategory}
        HandleSearchInput={HandleSearchInput}
        showSubCategoryInFilter={showSubCategoryInFilter}
        subCategoryList={subCategoryList}
        showSupplierInFilter={showSupplierInFilter}
        showProjectFieldInFilter={showProjectFieldInFilter}
        searchSupplier={searchSupplier}
        setSearchSupplier={setSearchSupplier}
        supplierList={updatedSupplierList}
      />

      <div className="table-responsive report-table-container">
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
            {filteredList?.length > 0 && filteredList !== null ? (
              <>
                {filteredList.map((data: any, index: any) => {
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
