import ChallanItemsTable from './ChallanItemsTable';
import CreateChittiForm from './CreateChittiForm';
import NarrationTable from './NarrationTable';

const CreateChittiMaster = () => {
  return (
    <div>
      <div className="d-flex justify-content-end mb-2">
        <button
          type="submit"
          className=" btn btn-outline-primary mt-2 mx-3 py-1 form-submit-button"
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
