import { useEffect, useState } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const CreateChittiForm = ({
  currentDate,
  selectedDropdownValue,
  HandleGoldRate,
  HandleRemarks,
  setSelectedDropdownValue,
  clientNameList,
  clientGroupList,
  HandleClientGroup,
  defaultData,

}: any) => {

  console.log("defaultData", defaultData)
  const ChittiNoList = ['client1', 'client2', 'client3', 'client4'];
  const handleSubmit: any = () => { };
  const [bgColor, setBgColor] = useState<any>(true);
  // const [currentDate, setCurrentDate] = useState<any>(new Date());
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const now = new Date();
  //     const day = String(now.getDate()).padStart(2, '0');
  //     const month = String(now.getMonth() + 1).padStart(2, '0');
  //     const year = now.getFullYear();

  //     const formattedDate: any = `${day}-${month}-${year}`;
  //     setCurrentDate(formattedDate);
  //   }, 1000); // Update the date every second

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="row ">
          <div className="col-lg-10"></div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Date :
            </label>
            <div className="d-flex justify-content-between h-100">
              <input
                // type="date"
                id="date"
                name="date"
                defaultValue={defaultData?.date}
                value={currentDate}
                className="form-control custom-input-field py-0 px-2"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              // onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Client Name :
            </label>

            <SelectedInputDropdown
              drowpdownlist={clientNameList}
              bgColor={bgColor}
              placeholderValue="Client Name"
              selectedDropdownValue={selectedDropdownValue}
              setSelectedDropdownValue={setSelectedDropdownValue}
              clientGroupList={clientGroupList}
              HandleClientGroup={HandleClientGroup}
              defaultData={defaultData}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Gold Rate :
            </label>
            <input
              type="text"
              name="gold"
              className="form-control custom-input-field px-1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              // defaultValue={defaultData}
              onChange={HandleGoldRate}
            // onBlur={handleBlur}
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Remarks:
            </label>
            <input
              type="text"
              name="remark"
              className="form-control custom-input-field px-1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={HandleRemarks}
            // onBlur={handleBlur}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateChittiForm;
