import React from 'react'

const MasterPageSubCategoryDetail = () => {

    console.log(window.location)
    return (
        <div className='container'>
            <div className="card mt-2">
                <div className="card-header">
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <label htmlFor="basic-url " className="fs-6 mt-3 text-center">
                        Category
                        <span className='text-danger'>*</span>
                    </label>
                    <div className="input-group w-50 master-input-field my-3 mt-2">
                        <input
                            type="text"
                            name="title"
                            className="form-control ps-2"
                            value="categoryname"
                            id="title"
                            readOnly
                            aria-describedby="basic-addon3"
                        // onChange={HandleInputValue}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MasterPageSubCategoryDetail;