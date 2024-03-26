import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddHuidProductApi from '../../../../services/api/Master/add-huid-product-api';
import { getHuidProductList } from '../../../../store/slices/Master/get-huid-product-slice';

const AddHuidProduct = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    title: '',
    hm_pcs: '',
  });
  const [error, setError] = useState('');
  const accessToken: any = useSelector(get_access_token);

  const handleSubmit: any = async () => {
    if (inputValue.title.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      if (Object.keys(inputValue.hm_pcs)?.length > 0) {
        let apiRes: any = await AddHuidProductApi(
          accessToken?.token,
          inputValue
        );
        console.log('apires', apiRes);

        if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
          toast.success('HUID Product Added');
          dispatch(getHuidProductList(accessToken?.token));
        } else {
          toast.error('HUID product already exist');
        }
        setError('');
        setInputValue({
          title: '',
          hm_pcs: '',
        });
      } else {
        toast.error('Hm pcs is mandatory');
      }
    }
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setError('');

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
  return (
    <div className="container mt-2">
      <label htmlFor="basic-url " className="fs-6 text-center">
        Title
        <span className="text-danger">*</span>
      </label>
      <div className="input-group  w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="title"
          aria-describedby="basic-addon3"
          onChange={handleInputValue}
          value={inputValue.title}
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>
      <label htmlFor="basic-url " className="fs-6 mt-1 text-center">
        Hm pcs
        <span className="text-danger">*</span>
      </label>
      <div className="input-group w-50 master-input-field">
        <div className="w-100 ">
          <input
            type="number"
            name="hm_pcs"
            className="form-control h-100 ps-2"
            id="hm_pcs"
            aria-describedby="basic-addon3"
            onChange={handleInputValue}
            value={inputValue.hm_pcs}
          />
        </div>
      </div>
      <div className="d-flex justify-content-start ">
        <button
          type="submit"
          onClick={handleSubmit}
          className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddHuidProduct;
