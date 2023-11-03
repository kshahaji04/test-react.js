import { useState } from 'react';
import SelectedInputDropdown from '../../../SelectedInputDropdown';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddSubCategoryApi from '../../../../services/api/Master/add-sub-category-api';
import { useDispatch } from 'react-redux';
import { getSubCategoryCategory } from '../../../../store/slices/Master/get-subcategory-category-slice';

const AddSubCategory = ({ CategoryList }: any) => {
  const dispatch = useDispatch();
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [title, setTitle] = useState<any>('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const AccessToken: any = useSelector(get_access_token);

  const HandleSubmit: any = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      if (Object?.keys(selectedDropdownValue)?.length > 0) {
        let apiRes: any = await AddSubCategoryApi(
          AccessToken?.token,
          title,
          selectedDropdownValue
        );
        console.log('apires', apiRes);

        setTitle('');
        if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
          toast.success('Sub Category Created');
          dispatch(getSubCategoryCategory(AccessToken?.token));
        } else {
          toast.error('Sub category already exist');
        }
        setError('');
        setInputValue('');
        setSelectedDropdownValue('');
      } else {
        toast.error('Category is mandatory');
      }
    }
  };

  const HandleInputValue = (e: any) => {
    setError('');
    setTitle(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="container mt-1">
      <label htmlFor="basic-url " className="fs-6 mb-1 text-center">
        Title
        <span className="text-danger">*</span>
      </label>
      <div className="input-group mb-1 w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
          value={inputValue}
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>

      <label htmlFor="basic-url " className="fs-6 mb-1 text-center">
        Category
        <span className="text-danger">*</span>
      </label>
      <div className="w-50">
        <SelectedInputDropdown
          drowpdownlist={CategoryList}
          // bgColor={bgColor}
          placeholderValue="Category Name"
          selectedDropdownValue={selectedDropdownValue}
          setSelectedDropdownValue={setSelectedDropdownValue}
          // clientGroupList={clientGroupList}
          // HandleClientGroup={HandleClientGroup}
        />
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

export default AddSubCategory;
