import ReportMaster from '../ReportMaster';
import ReportTabs from './ReportTabs';

const DayToDaySummaryReport = () => {
  return (
    <div className="container mt-3 mb-2">
      <ReportTabs />
      <ReportMaster />
    </div>
  );
};

export default DayToDaySummaryReport;
