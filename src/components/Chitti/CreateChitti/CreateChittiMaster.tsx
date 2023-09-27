import ChallanItemsTable from './ChallanItemsTable';
import CreateChittiForm from './CreateChittiForm';
import NarrationTable from './NarrationTable';

const CreateChittiMaster = () => {
  return (
    <div>
      <div className="d-flex justify-content-end mb-1">
        <button
          type="submit"
          className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
        >
          Submit
        </button>
      </div>
      <CreateChittiForm />
      <ChallanItemsTable />
      <NarrationTable />
    </div>
  );
};

export default CreateChittiMaster;
