import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SelectedInputDropdown from '../../../SelectedInputDropdown';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddProjectSubCategoryMappingApi from '../../../../services/api/Master/add-project-subCategory-mapping-api';
import { getProjectSubCategoryMapping } from '../../../../store/slices/Master/get-project-subcategory-mapping-slice';

const AddProjectSubCategoryMapping = ({ subCategoryList }: any) => {
  const dispatch = useDispatch();
  const [project, setProject] = useState<any>('');

  const [selectedStoneValue, setSelectedStoneValue] = useState<any>('');
  const [selectedPlainValue, setSelectedPlainValue] = useState<any>('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const AccessToken: any = useSelector(get_access_token);

  //   const bgColor = useRef(true);
  const HandleSubmit: any = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await AddProjectSubCategoryMappingApi(
        AccessToken?.token,
        project,
        selectedStoneValue,
        selectedPlainValue
      );
      console.log('apires', apiRes);
      setProject('');
      if (apiRes?.data?.message?.status === 'success') {
        toast.success('Project sub category mapping created');
        dispatch(getProjectSubCategoryMapping(AccessToken?.token));
        setInputValue('');
        setSelectedStoneValue('');
        setSelectedPlainValue('');
      } else {
        toast.error('Project sub category mapping already exist');
      }

      setError('');
    }
  };

  const HandleInputValue = (e: any) => {
    setError('');
    setProject(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <div className="container mt-2">
      <label htmlFor="basic-url " className="fs-6 text-center">
        Project
        <span className="text-danger">*</span>
      </label>
      <div className="input-group  w-50 master-input-field">
        <input
          type="text"
          name="project"
          className="form-control ps-2"
          id="project"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
          value={inputValue}
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>
      <label htmlFor="basic-url " className="fs-6 mt-1 text-center">
        Stone
      </label>
      <div className="input-group w-50 master-input-field">
        <div className="w-100 ">
          <SelectedInputDropdown
            drowpdownlist={subCategoryList}
            // placeholderValue="Group"
            selectedDropdownValue={selectedStoneValue}
            setSelectedDropdownValue={setSelectedStoneValue}
          />
        </div>
      </div>

      <label htmlFor="basic-url " className="fs-6 mt-1 text-center">
        Plain
      </label>
      <div className="input-group w-50 master-input-field">
        <div className="w-100 ">
          <SelectedInputDropdown
            drowpdownlist={subCategoryList}
            // placeholderValue="Group"
            selectedDropdownValue={selectedPlainValue}
            setSelectedDropdownValue={setSelectedPlainValue}
          />
        </div>
      </div>
      <div className="d-flex justify-content-start ">
        <button
          type="submit"
          onClick={HandleSubmit}
          className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddProjectSubCategoryMapping;
