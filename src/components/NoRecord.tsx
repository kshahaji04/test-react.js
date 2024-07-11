import noRecordImg from '.././assets/no-record.jpg';
import '../Style/noRecord.css';

const NoRecord = () => {
  return (
    <>
      <div className="text-center my-5">
        <img src={noRecordImg} alt="No record img" />

        <h3 className="">No Records Found !</h3>
        <p className="no-record-desc">
          It looks like we don't have any items that match your search.
        </p>
        {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
      </div>
    </>
  );
};

export default NoRecord;
