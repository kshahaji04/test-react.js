import { useLocation } from 'react-router-dom';
import useReportHook from '../../hooks/report/report-hook';
import ReportListingTable from './ReportListingTable';
import ReportsFilters from './ReportsFilters';

const ReportMaster = () => {
  const {
    reportData,
    searchInputValues,
    setSearchInputValues,
    handleSearchInput,
    handlePrintBtn,
    handleSearchBtn,
  }: any = useReportHook();
  const location: any = useLocation();
  // const navigate: any = useNavigate();

  const generateDynamicHeading = (path: string | undefined) => {
    if (!path) {
      return '';
    }
    switch (true) {
      case path.includes('subcategory'):
        return 'Sub Category Report';

      case path.includes('categorypartywise'):
        return 'Category Partywise Report';

      case path.includes('categorysummary'):
        return 'Category Summary Report';

      default:
        return '';
    }
  };
  return (
    <div className="container">
      {/* <button
        type="button"
        className="btn btn-outline-primary my-2 py-1 px-3"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button> */}
      <div className="d-flex justify-content-between my-1">
        <h5>{generateDynamicHeading(location.pathname)}</h5>
        <button
          type="button"
          className="btn btn-primary btn-sm py-0 px-3 download-report-btn"
          onClick={handlePrintBtn}
        >
          <span className="fs-6">Print</span>
        </button>
      </div>
      <ReportsFilters
        searchInputValues={searchInputValues}
        setSearchInputValues={setSearchInputValues}
        handleSearchInput={handleSearchInput}
        handleSearchBtn={handleSearchBtn}
        dropdownData={reportData}
      />
      <div className="container">
        <ReportListingTable
          reportData={reportData}
          searchInputValues={searchInputValues}
          setSearchInputValues={setSearchInputValues}
        />
      </div>
    </div>
  );
};

export default ReportMaster;
