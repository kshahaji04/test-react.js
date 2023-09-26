import React from 'react';

const DataUpload = () => {
  const HandleFileUpload: any = () => {};
  const handleFileUploadInput: any = (e: any) => {
    console.log('file upload', e.target.value);
  };
  return (
    <div className="container">
      <div className="my-4">
        <button type="button" className="btn btn-primary text-uppercase btn-sm">
          download template
        </button>
      </div>
      <div>
        {/* <form > */}
        <input
          type="file"
          name="fileupload"
          // value="fileupload"
          id="fileupload"
          onChange={handleFileUploadInput}
        />

        <button
          className="btn btn-outline-primary p-1"
          onClick={HandleFileUpload}
          type="submit"
        >
          Upload File
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default DataUpload;
