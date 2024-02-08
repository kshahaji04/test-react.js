import { useNavigate, useParams } from 'react-router-dom';

const MasterPageSupplierGroupDetails = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className="mt-5 row justify-content-center">
                <div className="card mt-2 col-9">
                    <div className="card-header">
                        <button
                            type="submit"
                            onClick={() => navigate(-1)}
                            className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
                        >
                            Back
                        </button>
                    </div>
                    <div className="my-2 p-4">
                        <label htmlFor="basic-url " className="fs-5">
                            Supplier group
                            <span className="text-danger">*</span>
                        </label>
                        <div className="input-group my-2 w-25">
                            <input
                                type="text"
                                className="form-control py-1 ps-1"
                                // value={inputValue}
                                defaultValue={id}
                                required
                                id="basic-url"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterPageSupplierGroupDetails;
