
import { useNavigate, useParams } from 'react-router-dom';

const MasterPageSupplierDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="container ">
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
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="basic-url " className="fs-6 mt-3 text-center">
                                    Supplier Name
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="input-group w-50 master-input-field my-3 mt-2">
                                    <input
                                        type="text"
                                        className="form-control py-1 ps-1"
                                        defaultValue={id}
                                        required
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterPageSupplierDetails;
