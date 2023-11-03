import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import SelectedInputDropdown from '../../../SelectedInputDropdown';
import CreateNewSupplierApi from '../../../../services/api/Master/add-supplier-api';
import { getsupplierAndSupplierGroup } from '../../../../store/slices/Master/get-supplier-supplierGroup-slice';

const AddSupplier = ({ GroupListdata }: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<any>('');

  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const AccessToken: any = useSelector(get_access_token);

  const HandleSubmit: any = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      if (Object?.keys(selectedDropdownValue)?.length > 0) {
        let apiRes: any = await CreateNewSupplierApi(
          AccessToken?.token,
          title,
          selectedDropdownValue
        );

        if (apiRes?.data?.message?.status === 'success') {
          toast.success('New Supplier Created');
          dispatch(getsupplierAndSupplierGroup(AccessToken?.token));
          setInputValue('');
        } else if (apiRes?.data?.message?.status === 'error') {
          toast.error('Supplier already exist');
        }
        setTitle('');
        setError('');
        setSelectedDropdownValue('');
      } else {
        toast.error('Supplier group in mandatory');
      }
    }
  };

  const HandleInputValue = (e: any) => {
    setError('');
    setTitle(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="container mt-2">
      <label htmlFor="basic-url " className="fs-6 text-center">
        Supplier name
        <span className="text-danger">*</span>
      </label>
      <div className="input-group  w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="title"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
          value={inputValue}
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>
      <label htmlFor="basic-url " className="fs-6 mt-1 text-center">
        Supplier Group
        <span className="text-danger">*</span>
      </label>
      <div className="input-group w-50 master-input-field">
        <div className="w-100 ">
          <SelectedInputDropdown
            drowpdownlist={GroupListdata}
            // bgColor={bgColor}
            placeholderValue="Client Group"
            selectedDropdownValue={selectedDropdownValue}
            setSelectedDropdownValue={setSelectedDropdownValue}
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

export default AddSupplier;
