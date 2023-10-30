import { useRef, useState } from 'react';
import UseCategoryPartywiseReportHook from '../../../hooks/report/category-partywise-hook';
import FilterReportListing from './FilterReportListing';
import UseClientNameHook from '../../../hooks/Master/client-name-hook';
import UseCategoryHook from '../../../hooks/Master/category-hook';
import { useSelector } from 'react-redux';
import { get_chitti_challan } from '../../../store/slices/Chitti/get-chitti-challan-list-slice';
import ShowTotalAmountOfReportData from './ShowTotalAmountOfReportData';

const CategoryPartyWiseReport = () => {
  const { categoryPartywiseReportData }: any = UseCategoryPartywiseReportHook();
  console.log(
    'categoryPartywiseReportData in tssx',
    categoryPartywiseReportData
  );

  const challan_data_from_store: any = useSelector(get_chitti_challan);
  console.log('challandata', challan_data_from_store);
  const { clientNameList }: any = UseClientNameHook();
  const { CategoryList }: any = UseCategoryHook();

  const [searchInputValues, setSearchInputValues] = useState({
    fromDate: '',
    toDate: '',
  });

  const showClientNameInFilter = useRef(true);
  const showCategoryInFilter = useRef(true);
  const showDateInFilter = useRef(true);

  const [searchClientName, setSearchclientName] = useState<any>('');
  const [searchCategory, setSearchCategory] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  // const filteredListByDate =
  //   challan_data_from_store?.data?.length > 0 &&
  //   challan_data_from_store?.data !== null &&
  //   (searchInputValues.fromDate ||
  //     searchInputValues.toDate
  //    )
  //     ? challan_data_from_store?.data?.filter((item: any) => {

  //         const dateMatch =
  //           searchInputValues.fromDate && searchInputValues.toDate
  //             ? item?.date >= searchInputValues.fromDate &&
  //               item?.date <= searchInputValues.toDate
  //             : true;

  //         return dateMatch;
  //       })
  //     : challan_data_from_store;

  //     console.log("filter challan data",filteredListByDate)

  const filteredList =
    categoryPartywiseReportData?.length > 0 &&
    categoryPartywiseReportData !== null &&
    (searchInputValues.fromDate ||
      searchInputValues.toDate ||
      searchClientName ||
      searchCategory)
      ? categoryPartywiseReportData.filter((item: any) => {
          const categoryMatch = searchCategory
            ? item?.category
                ?.toLowerCase()
                .includes(searchCategory?.toLowerCase())
            : true;
          const clientNameMatch = searchClientName
            ? item?.client_name
                ?.toLowerCase()
                ?.includes(searchClientName?.toLowerCase())
            : true;

          const dateMatch =
            searchInputValues.fromDate && searchInputValues.toDate
              ? item?.date >= searchInputValues.fromDate &&
                item?.date <= searchInputValues.toDate
              : true;

          return categoryMatch && clientNameMatch && dateMatch;
        })
      : categoryPartywiseReportData;

  return (
    <div className="container">
      <div className="mb-1">
        <h5>Category Partywise Report</h5>
      </div>
      <FilterReportListing
        clientNameList={clientNameList}
        searchClientName={searchClientName}
        setSearchclientName={setSearchclientName}
        CategoryList={CategoryList}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        HandleSearchInput={HandleSearchInput}
        showCategoryInFilter={showCategoryInFilter}
        showClientNameInFilter={showClientNameInFilter}
        showDateInFilter={showDateInFilter}
      />
      <div className="table-responsive  report-table-container mb-5">
        <table className="table table-striped table-hover ">
          <thead className="report-table-head-row sticky-top">
            <tr className="report-table-head-tr text-uppercase">
              <th scope="col">No</th>
              <th scope="col">Category</th>
              <th scope="col">Client Name</th>
              <th scope="col">Gross Weight</th>
              <th scope="col">Net Weight</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredList?.length > 0 && filteredList !== null ? (
              <>
                {filteredList.map((data: any, index: any) => {
                  return (
                    <>
                      <tr className="report-table-row" key={index}>
                        <td>{index + 1}</td>
                        <td>{data.category}</td>
                        <td>{data.client_name}</td>
                        <td>{data.total_gross_weight}</td>
                        <td>{data.total_net_weight}</td>
                        <td>{data.total_amount}</td>
                      </tr>
                    </>
                  );
                })}
                <ShowTotalAmountOfReportData data={filteredList} colSpan="3" />
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

export default CategoryPartyWiseReport;
